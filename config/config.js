"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ENV = void 0;
var dotenv_1 = __importDefault(require("dotenv"));
var development_1 = require("./development");
var production_1 = require("./production");
var utils_1 = require("./utils");
dotenv_1.default.config({ path: "./config.env" });
var DEFAULT_ENV = utils_1.NodeEnvEnum.development;
exports.ENV = process.env.NODE_ENV || DEFAULT_ENV;
var Enviorment = /** @class */ (function () {
    function Enviorment() {
        this.config = this.getConfigByEnv(exports.ENV);
        this.logEnvConfig();
    }
    Enviorment.prototype.logEnvConfig = function () {
        console.log("Enviorment Config:", this.config);
    };
    Enviorment.prototype.getConfigByEnv = function (ENV) {
        return ENV === utils_1.NodeEnvEnum.development ? development_1.developmentConfig : production_1.productionConfig;
    };
    return Enviorment;
}());
exports.default = new Enviorment().config;
