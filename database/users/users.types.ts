import { Document } from "mongoose"

export interface User {
    email:string;
    password:string;
    role:string;
    salt:string;
}
export interface IUser extends Document, User { }
