import { Module } from '@nestjs/common';
import { RouterModule, Routes } from '@nestjs/core';
import { UserModule } from 'src/modules/user/user.module';

const routes: Routes = [
  {
    path: '/user',
    module: UserModule,
  },
];

@Module({
  imports: [UserModule, RouterModule.register(routes)],
  providers: [],
  controllers: [],
  exports: [],
})
export class AppRoutingModule {}
