"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mongoInstance = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
var config_1 = __importDefault(require("../config/config"));
var MongoConnection = /** @class */ (function () {
    function MongoConnection() {
        this._mongoOptions = { useNewUrlParser: true, useUnifiedTopology: true };
        mongoose_1.default.connect("mongodb+srv://" + config_1.default.mongoUser + ":" + config_1.default.mongoPass + "@cluster0.7jclm.mongodb.net/" + config_1.default.mongoDBName + "?retryWrites=true&w=majority", this._mongoOptions)
            .then(function () {
            console.log("connect to mongo " + config_1.default.mongoDBName + " successfully");
        }).catch(function () {
            console.log("fail to connect to mongo");
        });
        this._connection = mongoose_1.default.connection;
    }
    Object.defineProperty(MongoConnection.prototype, "connection", {
        get: function () {
            return this._connection;
        },
        enumerable: false,
        configurable: true
    });
    return MongoConnection;
}());
exports.mongoInstance = new MongoConnection();
