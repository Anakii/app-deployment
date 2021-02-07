import express, { NextFunction, Request, Response } from "express";

export class ClientRoutes {
    private _router: express.Router = express.Router();
    constructor() {
        this.setRoutes();
    }
    setRoutes(): void {
        this._router.get("/text", this.getText);
    }
    get router(): express.Router {
        return this._router;
    }

    public getText = ((req: Request, res: Response, next: NextFunction): void => {
        res.json({ data: 'Client data' });
    })
}