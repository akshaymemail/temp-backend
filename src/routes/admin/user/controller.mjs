import HttpResponse from "../../../utils/response.mjs";
import UserModel from "../../../models/user.mjs";
import MESSAGES from "../../../intl/main.mjs";
class UserController {
    async getProfile(req, res) {
        //find user
        try {
            const foundUser = await UserModel.findById(req.user?.uid)
                .select("-password -v")
                .lean();
            if (foundUser) {
                // user found
                HttpResponse.ok(res, foundUser);
            }
            else {
                // something went wrong, user not found
                HttpResponse.badRequest(res, MESSAGES.USER.PORFILE_DETAILS_NOT_FOUND);
            }
        }
        catch (error) {
            HttpResponse.internalServerError(res);
        }
    }
}
export default UserController;
