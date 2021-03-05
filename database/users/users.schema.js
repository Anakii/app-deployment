"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModal = void 0;
var mongoose_1 = require("mongoose");
var USER_MODAL_NAME = "User";
var UserSchema = new mongoose_1.Schema({
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
});
exports.UserModal = mongoose_1.model(USER_MODAL_NAME, UserSchema);
