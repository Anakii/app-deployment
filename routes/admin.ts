import express, { NextFunction, Request, Response } from "express"

export class AdminRoutes {

    constructor() { 
        
    }

    public getText = ((req: Request, res: Response, next: NextFunction): void => {
        res.json({ data: "Admin data" })
    })



}