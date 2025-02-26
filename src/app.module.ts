import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Test1Module } from './test1/test1.module';
import { Test2Module } from './test2/test2.module';
import { Test3Controller } from './test3/test3.controller';
import { CatsController } from './cats/cats.controller'
import { Test1Controller } from './test1/test1.controller'
import { CatsService } from './cats/cats.service';
import { logger } from './common/middleware/logger.middleware'

// 使用@Module装饰器定义模块
@Module({
  // 导入其他模块
  imports: [Test1Module, Test2Module],
  // 声明该模块的控制器
  controllers: [AppController, Test3Controller, CatsController],
  // 声明该模块的提供者（通常是服务）
  providers: [AppService, CatsService],
})

export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // consumer.apply(LoggerMiddleware).forRoutes({ path: 'cats', method: RequestMethod.GET })
    // consumer
    //   .apply(logger)
    //   .exclude({ path: 'cats', method: RequestMethod.GET })
    //   .forRoutes(Test1Controller, CatsController)
  }
}
