import { Module } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { TimeoutInterceptor } from './timeout.interceptor';
import { ErrorsInterceptor } from './errors.interceptor';

@Module({
  controllers: [],
  providers: [
    { provide: APP_INTERCEPTOR, useClass: ErrorsInterceptor }, // For BadGateway Error
    { provide: APP_INTERCEPTOR, useClass: TimeoutInterceptor }, // For RequestTimeout Error
  ],
  imports: [],
})
export class AppInterceptorModule {}
