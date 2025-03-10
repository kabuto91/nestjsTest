import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import {
  ValidationPipe,
  HttpStatus,
  BadRequestException,
} from '@nestjs/common';
import { AppModule } from './app.module';
import { logger } from './common/middleware/logger.middleware';
import { HttpExceptionFilter } from './exception/http-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
    .setTitle('vue3-admin')
    .setDescription(
      'Background system based on Nest.js + Vue3 full stack development',
    )
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('docs', app, document);

  // 修改 serverName 和端口
  // 设置全局接口数据校验
  // 以下参数均可根据自身需求设置
  // app.useGlobalPipes(
  //   new ValidationPipe({
  //     transform: false, // 启用参数类型自动转换，常规设置
  //     whitelist: true, // 监听参数白名单，常规设置
  //     // 禁止非白名单参数，存在非白名单属性报错。此项可根据需求而定，如果设置false，将剥离非白名单属性
  //     forbidNonWhitelisted: true,
  //     // 设置校验失败后返回的http状态码
  //     errorHttpStatusCode: HttpStatus.BAD_REQUEST,
  //     // 设置校验失败后的响应数据格式
  //     exceptionFactory: (errors) => {
  //       // 此处要注意，errors是一个对象数组，包含了当前所调接口里，所有验证失败的参数及错误信息。
  //       // 此处的处理是只返回第一个错误信息
  //       let msg = Object.values(errors[0].constraints)[0];
  //       return new BadRequestException({
  //         msg: msg,
  //         status: HttpStatus.BAD_REQUEST,
  //       });
  //     },
  //   }),
  // );

  app.use(logger)

  app.useGlobalFilters(new HttpExceptionFilter())

  await app.listen(3000);
}
bootstrap();
