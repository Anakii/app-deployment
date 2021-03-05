"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientRoutes = void 0;
var express_1 = __importDefault(require("express"));
var ClientRoutes = /** @class */ (function () {
    function ClientRoutes() {
        this._router = express_1.default.Router();
        this.getText = (function (req, res, next) {
            res.json({ data: 'Client data' });
        });
        this.setRoutes();
    }
    ClientRoutes.prototype.setRoutes = function () {
        this._router.get("/text", this.getText);
    };
    Object.defineProperty(ClientRoutes.prototype, "router", {
        get: function () {
            return this._router;
        },
        enumerable: false,
        configurable: true
    });
    return ClientRoutes;
}());
exports.ClientRoutes = ClientRoutes;
