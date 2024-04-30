import { ConfigFactory } from '@nestjs/config';
import { AppConfig } from './app.config';
import { DatabaseConfig } from './database.config';
import { HelperConfig } from './helper.config';
import { FileConfig } from './file.config';
import { RequestConfig } from './request.config';

const Configs: ConfigFactory[] = [
  AppConfig,
  DatabaseConfig,
  HelperConfig,
  FileConfig,
  RequestConfig,
];

export { Configs };
