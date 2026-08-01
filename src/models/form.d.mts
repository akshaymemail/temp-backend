import { Schema } from "mongoose";
import { MForm } from "../types/form.mjs";
export declare const FormSchema: Schema<MForm, import("mongoose").Model<MForm, any, any, any, (import("mongoose").Document<unknown, any, MForm, any, import("mongoose").DefaultSchemaOptions> & MForm & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
}) | (import("mongoose").Document<unknown, any, MForm, any, import("mongoose").DefaultSchemaOptions> & MForm & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}), any, MForm>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, MForm, import("mongoose").Document<unknown, {}, MForm, {
    id: string;
}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<MForm & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    uid?: import("mongoose").SchemaDefinitionProperty<string, MForm, import("mongoose").Document<unknown, {}, MForm, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<MForm & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    project?: import("mongoose").SchemaDefinitionProperty<string, MForm, import("mongoose").Document<unknown, {}, MForm, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<MForm & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    title?: import("mongoose").SchemaDefinitionProperty<string, MForm, import("mongoose").Document<unknown, {}, MForm, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<MForm & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    description?: import("mongoose").SchemaDefinitionProperty<string, MForm, import("mongoose").Document<unknown, {}, MForm, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<MForm & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, MForm>;
declare const FormModel: import("mongoose").Model<MForm, {}, {}, {}, import("mongoose").Document<unknown, {}, MForm, {}, import("mongoose").DefaultSchemaOptions> & MForm & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
}, any, MForm>;
export default FormModel;
