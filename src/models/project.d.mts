import { MProject } from "../types/project.mjs";
declare const ProjectModel: import("mongoose").Model<MProject, {}, {}, {}, import("mongoose").Document<unknown, {}, MProject, {}, import("mongoose").DefaultSchemaOptions> & MProject & Required<{
    _id: import("mongoose").Types.ObjectId;
}> & {
    __v: number;
} & {
    id: string;
}, any, MProject>;
export default ProjectModel;
