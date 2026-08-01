import { MUser } from "../types/user.mjs";
declare const UserModel: import("mongoose").Model<MUser, {}, {}, {}, import("mongoose").Document<unknown, {}, MUser, {}, import("mongoose").DefaultSchemaOptions> & MUser & Required<{
    _id: import("mongoose").Types.ObjectId;
}> & {
    __v: number;
} & {
    id: string;
}, any, MUser>;
export default UserModel;
