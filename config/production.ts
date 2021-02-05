import { defaultEnv } from "./default";
import { EnviormentConfig, NodeEnvEnum } from "./utils";

export const productionConfig: EnviormentConfig = {
    ...defaultEnv,
    nodeEnv: NodeEnvEnum.production,
    allowedOrigins: `https://my-domain:${defaultEnv.port}`
}