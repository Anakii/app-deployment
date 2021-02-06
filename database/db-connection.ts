import mongoose from "mongoose";

 class MongoConnection {
    private _connection: mongoose.Connection;
    private _mongoOptions: mongoose.ConnectionOptions = { useNewUrlParser: true, useUnifiedTopology: true }
    constructor() {
        mongoose.connect('', this._mongoOptions)
            .then(() => {
                console.log("connect to mongo successfully");

            }).catch(() => {
                console.log("fail to connect to mongo");

            })
        this._connection = mongoose.connection;
    }
    get connection(): mongoose.Connection {
        return this._connection
    }
}
export const mongoInstance = new MongoConnection()