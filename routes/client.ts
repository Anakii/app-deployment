import express, { NextFunction, Request, Response } from "express"

export class ClientRoutes {
    constructor() { }

    public getText = ((req: Request, res: Response, next: NextFunction) => {
        res.json({ data: 'Client data' })
    })
}