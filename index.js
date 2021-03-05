"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var path = __importStar(require("path"));
var config_1 = __importDefault(require("./config/config"));
var db_connection_1 = require("./database/db-connection");
var router_1 = require("./routes/router");
var App = /** @class */ (function () {
    function App() {
        this._app = express_1.default();
        this._port = config_1.default.port;
        this.setCors();
        this._routes = new router_1.Router(this._app);
        this._app.use(express_1.default.static(path.join(__dirname, '/web-app')));
        this.runServer();
        this._app.all("*", this._routes.router);
        this._db = db_connection_1.mongoInstance.connection;
    }
    App.prototype.setCors = function () {
        this._app.use(function (req, res, next) {
            // Website you wish to allow to connect
            res.setHeader('Access-Control-Allow-Origin', config_1.default.allowedOrigins);
            // Request methods you wish to allow
            res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
            // Request headers you wish to allow
            res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
            // Set to true if you need the website to include cookies in the requests sent
            // to the API (e.g. in case you use sessions)
            res.setHeader('Access-Control-Allow-Credentials', "true");
            // Pass to next layer of middleware
            next();
        });
    };
    App.prototype.runServer = function () {
        var _this = this;
        this._app.listen(this._port, function () {
            return console.log("server is listening on port " + _this._port);
        });
        this.runUi();
    };
    App.prototype.runUi = function () {
        this._app.get('/', function (req, res) {
            res.sendFile(__dirname + "/web-app/index.html");
        });
    };
    return App;
}());
exports.default = new App();
