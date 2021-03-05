"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Router = void 0;
var express_1 = __importDefault(require("express"));
var admin_1 = require("./admin");
var client_1 = require("./client");
var Router = /** @class */ (function () {
    function Router(app) {
        this._router = express_1.default.Router();
        this._adminRoutes = new admin_1.AdminRoutes();
        this._clientRoutes = new client_1.ClientRoutes();
        this._app = app;
        this.setRoutes();
    }
    Router.prototype.setRoutes = function () {
        this._app.use("/admin", this._adminRoutes.router);
        this._app.use("/client", this._clientRoutes.router);
    };
    Object.defineProperty(Router.prototype, "router", {
        get: function () {
            return this._router;
        },
        enumerable: false,
        configurable: true
    });
    return Router;
}());
exports.Router = Router;
