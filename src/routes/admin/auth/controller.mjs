import HttpResponse from "../../../utils/response.mjs";
import BcryptService from "../../../lib/bcrypt.mjs";
import JWTService from "../../../lib/jwt.mjs";
import UserModel from "../../../models/user.mjs";
import MESSAGES from "../../../intl/main.mjs";
import AppUitls from "../../../utils/app.mjs";
class AuthControllers {
    // user login
    async signin(req, res) {
        // Your login logic here
        //find user in db
        const fields = AppUitls.pickFields(req.body, ["email", "password"]);
        const foundUser = await UserModel.findOne({ email: fields.email })
            .select("-__v -createdAt -updatedAt")
            .lean();
        if (foundUser) {
            // user exist
            // verify password
            const isMatched = await BcryptService.comparePassword(fields.password, foundUser.password);
            if (isMatched) {
                // password is matched
                // sign token and respond
                const token = JWTService.signToken({
                    first_name: foundUser.first_name,
                    last_name: foundUser.last_name,
                    uid: foundUser._id.toString(),
                });
                const { password: _, _id: __, email: ___, ...user } = foundUser;
                HttpResponse.ok(res, { token, user: user });
            }
            else {
                // password is incorrect
                // inform user username or password is incorrect
                HttpResponse.badRequest(res, MESSAGES.USER.INCORRECT_CREDENTIALS);
            }
        }
        else {
            // user doesn't exist
            HttpResponse.badRequest(res, MESSAGES.USER.USER_NOT_FOUND);
        }
    }
    // user register
    async register(req, res) {
        // Your register logic here
        const fields = AppUitls.pickFields(req.body, [
            "org_name",
            "first_name",
            "last_name",
            "email",
            "password",
        ]);
        try {
            const hashedPassword = await BcryptService.hashPassword(fields.password);
            const newUser = new UserModel({ ...fields, password: hashedPassword });
            await newUser.save();
            HttpResponse.ok(res, {
                message: MESSAGES.USER.REGISTRATION_COMPLETED,
            });
        }
        catch (error) {
            HttpResponse.internalServerError(res, error);
        }
    }
}
export default AuthControllers;
