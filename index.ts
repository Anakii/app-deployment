import express from 'express';
import mongoose from 'mongoose';
import * as path from 'path';
import config from "./config/config";
import {  mongoInstance } from './database/db-connection';
import { Router } from "./routes/router"



class App {
  private _app: express.Application;
  private _port: string;
  private _router;
  private _db: mongoose.Connection

  constructor() {
    this._app = express()
    this._port = config.port;
    this._router = new Router()
    this._app.use(express.static(path.join(__dirname, '/web-app')))
    this._app.use(function (req, res, next) {

      // Website you wish to allow to connect
      res.setHeader('Access-Control-Allow-Origin', config.allowedOrigins);

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

    this._app.use("/", this._router.getRoutes())

    this.runServer();
    this._db = mongoInstance.connection;
  }

  private runServer(): void {
    this._app.listen(this._port, () => {
      return console.log(`server is listening on port ${this._port}`);
    });
    this.runUi();
  }
  private runUi(): void {

    // this._app.get('/', (req, res) => {
    //   res.sendFile(`${__dirname}/web-app/index.html`);
    // });

  }




}
export default new App();

