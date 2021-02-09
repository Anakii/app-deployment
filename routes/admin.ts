import express, { NextFunction, Request, Response } from "express"
import { UserModal } from "../database/users/users.schema"
import { IUser, User } from "../database/users/users.types"
import { Document } from "mongoose"

export class AdminRoutes {
    private _router: express.Router = express.Router()
    constructor() {
        this.setRoutes()
    }
    setRoutes(): void {
        this._router.get("/text", this.getText)
        this._router.post("/user", this.addUser)
    }
    get router(): express.Router {
        return this._router
    }

    public getText = ((req: Request, res: Response, next: NextFunction): void => {
        res.json({ data: "Admin dataasaa" })
    })
    public addUser = (async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        const user: IUser = new UserModal({
            email: "oranaki9910@gmail.com",
            password: "1234",
            salt: '1234',
            role: "admin"
        })
        try {
            const savedUser: Document<User> = await user.save();
            res.json({ status: true, massage: "Successfuly add user to db", data: savedUser })
        } catch (err) {
            res.json({ status: false, massage: "Faild to add user to db", err: err })

        }
    })



}