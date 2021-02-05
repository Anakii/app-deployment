import { defaultEnv } from "./default";
import { EnviormentConfig, NodeEnvEnum } from "./utils";

export const developmentConfig: EnviormentConfig = {
    ...defaultEnv,
    nodeEnv: NodeEnvEnum.development,
    allowedOrigins: 'http://localhost:4200'

}