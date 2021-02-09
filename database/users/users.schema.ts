import { Schema, model } from "mongoose"
import { IUser } from "./users.types"
const USER_MODAL_NAME: string = "User"

const UserSchema: Schema<IUser> = new Schema({
    email: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String, required: true },
    salt: { type: String, required: true },
    creationDate: {
        type: Date,
        default: new Date()
    },
    updatedDate: {
        type: Date,
        default: new Date()
    },
})

export const UserModal = model<IUser>(USER_MODAL_NAME, UserSchema)