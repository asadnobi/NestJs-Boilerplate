import { Module } from '@nestjs/common';
import { CoreModule } from 'src/core/core.module';
import { AppRoutingModule } from 'src/router';

@Module({
  controllers: [],
  providers: [],
  imports: [CoreModule, AppRoutingModule],
})
export class AppModule {}
