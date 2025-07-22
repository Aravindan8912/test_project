import { Document } from 'mongoose';
export type EmpDocument = Emp & Document;
export declare class Emp {
    empname: string;
    phonenumber: number;
    address: string;
}
export declare const EmpSchema: import("mongoose").Schema<Emp, import("mongoose").Model<Emp, any, any, any, Document<unknown, any, Emp, any> & Emp & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Emp, Document<unknown, {}, import("mongoose").FlatRecord<Emp>, {}> & import("mongoose").FlatRecord<Emp> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
