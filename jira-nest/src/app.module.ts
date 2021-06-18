import { Module, NestModule, MiddlewareConsumer, RequestMethod  } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProjectModule } from './project/project.module';
import { LoggerMiddleware } from './common/middleware/logger.middleware';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [ProjectModule, MongooseModule.forRoot('mongodb://127.0.0.1:27017')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule  {
  // configure(consumer: MiddlewareConsumer) {
  //   consumer
  //     .apply(LoggerMiddleware)
  //     .forRoutes({ path: '*', method: RequestMethod.ALL });
  // }
}
