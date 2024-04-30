import { ConfigFactory, registerAs } from '@nestjs/config';

const config: ConfigFactory = (): Record<string, any> => ({
  host: process.env.DATABASE_HOST,
  port: Number.parseInt(process.env.DATABASE_PORT),
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  dbName: process.env.DATABASE_NAME,
  debug: process.env.DATABASE_DEBUG === 'true',
});

const DatabaseConfig = registerAs('database', config);

export { DatabaseConfig };
