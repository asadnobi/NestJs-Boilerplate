import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { Configs } from 'src/configs';
import { DatabaseModule } from 'src/core/database';
import { DatabaseService } from 'src/core/database/database.service';
import { AppInterceptorModule } from './interceptors';
import { GetCookieMiddleware } from './middlewares/get-cookie.middleware';
import * as Joi from 'joi';

@Module({
  controllers: [],
  providers: [],
  imports: [
    ConfigModule.forRoot({
      load: Configs,
      envFilePath: `.env.${process.env.NODE_ENV}.local`,
      validationSchema: Joi.object({
        NODE_ENV: Joi.string()
          .valid('development', 'production')
          .default('development'),
        PORT: Joi.number().default(3000),
      }),
    }),
    MongooseModule.forRootAsync({
      imports: [DatabaseModule],
      useExisting: DatabaseService,
    }),
    AppInterceptorModule,
  ],
})
export class CoreModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(GetCookieMiddleware).forRoutes('*');
  }
}
