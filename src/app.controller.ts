import {
  Body,
  Controller,
  Get,
  Header,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Query,
  Redirect,
  Req,
  Res,
} from '@nestjs/common';
import { AppService } from './app.service';
import { Request, Response } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('/getReq')
  getReq(@Req() request: Request, @Res() response: Response): any {
    console.log(request.headers);
    // 通过获取到ts的类型 我想你应该是理解这个对象的意义的 如果你调用了Req 和Res那么这个时候你就需要手动的res,sed()了，不推荐 如果你直接这样做
    // 将会导致 失去与依赖于 Nest 标准响应处理的 Nest 功能（例如，拦截器（Interceptors） 和 @HttpCode()/@Header() 装饰器）的兼容性
    // 要解决此问题，可以将 passthrough 选项设置为 true 比如下面的函数 “/getReq2” 这样就能兼容，你只定义了code 其它的定义依然交由Nest处理 比如下面👇 的列子
    // 它可以解决下面的场景：同时使用这两种方法（例如，通过注入响应对象以仅设置 cookie/标头，但仍将其余部分留给框架），必须在装饰器中将选项设置为
    // HttpStatus.OK是一个枚举值
    response.status(HttpStatus.OK).send([]);
  }

  @Get('/getReq2')
  getReq2(
    @Req() request: Request,
    @Res({ passthrough: true }) response: Response,
  ): any {
    response.status(HttpStatus.OK);
    return [];
  }

  @Get('/test/:id')
  test(@Param() params: any): any {
    console.log(params);
    
    return params;
  }
}
