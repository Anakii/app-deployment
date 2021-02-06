import express from 'express'
import { AdminRoutes } from './admin'
import { ClientRoutes } from './client'

export class Router {
    private _router: express.Router
    private _adminRoutes = new AdminRoutes()
    private _clientRoutes = new ClientRoutes()

    constructor() {
        this._router = express.Router()
        this.setClientRoutes()
        this.setAdminRoutes()
    }
    setAdminRoutes(): void {
        this._router.get("/admin/text", this._adminRoutes.getText)
    }
    setClientRoutes(): void {
        this._router.get("/client/text", this._clientRoutes.getText)
    }
    get router(): express.Router {
        return this._router
    }

}