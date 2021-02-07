import express from 'express'
import { AdminRoutes } from './admin'
import { ClientRoutes } from './client'

export class Router {
    private _router: express.Router = express.Router();
    private _adminRoutes = new AdminRoutes();
    private _clientRoutes = new ClientRoutes();
    private _app: express.Application;

    constructor(app: express.Application) {
        this._app = app;
        this.setRoutes();
    }

    setRoutes(): void {
        this._app.use("/admin", this._adminRoutes.router);
        this._app.use("/client", this._clientRoutes.router);
    }

    get router(): express.Router {
        return this._router;
    }

}