import { ConfigFactory, registerAs } from '@nestjs/config';

const config: ConfigFactory = (): Record<string, any> => ({
  name: process.env.APP_NAME,
  env: process.env.NODE_ENV,

  http: {
    enable: process.env.HTTP_ENABLE || false,
    host: process.env.HTTP_HOST || 'localhost',
    port: Number.parseInt(process.env.HTTP_PORT) || 3000,
  },

  globalPrefix: '/api',
});

const AppConfig = registerAs('app', config);

export { AppConfig };
