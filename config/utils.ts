export enum NodeEnvEnum {
    development = "development",
    production = "production"
}
export interface DefaultEnviormentConfig {
    port: string
}
export interface EnviormentConfig {
    nodeEnv: string;
    port: string;
    allowedOrigins: string | string[]
}