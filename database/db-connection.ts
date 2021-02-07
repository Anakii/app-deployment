import mongoose from "mongoose";
import config from "../config/config"

 class MongoConnection {
    private _connection: mongoose.Connection;
    private _mongoOptions: mongoose.ConnectionOptions = { useNewUrlParser: true, useUnifiedTopology: true }
    constructor() {
        mongoose.connect(`mongodb+srv://${config.mongoUser}:${config.mongoPass}@cluster0.7jclm.mongodb.net/${config.mongoDBName}?retryWrites=true&w=majority`, this._mongoOptions)
            .then(() => {
                console.log(`connect to mongo ${config.mongoDBName} successfully`);

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