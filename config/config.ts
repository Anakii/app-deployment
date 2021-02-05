
import dotenv from 'dotenv';
import { developmentConfig } from "./development"
import { productionConfig } from "./production"
import { EnviormentConfig, NodeEnvEnum } from './utils';
dotenv.config({ path: "./config.env" })



const DEFAULT_ENV: string = NodeEnvEnum.development
export const ENV = process.env.NODE_ENV || DEFAULT_ENV;


class Enviorment {
    public config: EnviormentConfig;
    constructor() {
        this.config = this.getConfigByEnv(ENV);
        this.logEnvConfig();
    }
    private logEnvConfig():void {
        console.log("Enviorment Config:", this.config);
    }
    private getConfigByEnv(ENV: string): EnviormentConfig {
        return ENV === NodeEnvEnum.development ? developmentConfig : productionConfig;
    }
}
export default new Enviorment().config;