import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { UserModule } from './user/user.module';
import { CacheModule } from '@nestjs/cache-manager';
import { TestModule } from './test/test.module';
import { TestController } from './test/test.controller';
import { TestService } from './test/test.service';

@Module({
  imports: [
    UserModule,
    TestModule,
  ],
  controllers: [AppController, UserController,],
  providers: [AppService, UserService,],
})
export class AppModule {}
