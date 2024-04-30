import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import {
  MongooseModuleOptions,
  MongooseOptionsFactory,
} from '@nestjs/mongoose';
import mongoose from 'mongoose';

@Injectable()
export class DatabaseService implements MongooseOptionsFactory {
  constructor(private configService: ConfigService) {}

  createMongooseOptions(): MongooseModuleOptions {
    const env = this.configService.get<string>('app.env');
    const host = this.configService.get<string>('database.host');
    const port = this.configService.get<string>('database.port');
    const user = this.configService.get<string>('database.user');
    const pass = this.configService.get<string>('database.password');
    const dbName = this.configService.get<string>('database.dbName');
    const debug = this.configService.get<boolean>('database.debug');

    const uri: string = host + (port ? port : '');
    if (env !== 'production') mongoose.set('debug', debug);

    const mongooseOptions: MongooseModuleOptions = { uri, dbName, user, pass };

    return mongooseOptions;
  }
}
