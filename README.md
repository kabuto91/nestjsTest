# nestjsTest 


[TOC]



## 目录结构
* src
  * app.controller.spec.ts  // 控制器的单元测试。
  * app.controller.ts // 具有单一路由的基本控制器。
  * app.module.ts  // 应用的根模块。
  * app.service.ts  // 具有单一方法的基本服务。
  * main.ts // 使用核心函数 NestFactory 创建 Nest 应用实例的应用入口文件。

## 安装依赖
// 下载依赖  
`npm install`

// 运行依赖  
`npm run dev:start`

// 打包依赖  
`npm run build`

### 中间件
中间件是在路由处理程序之前调用的函数。中间件函数可以访问 request 和 response 对象，以及应用请求-响应周期中的 next() 中间件函数。下一个中间件函数通常由名为 next 的变量表示。

> Express 和 fastify 以不同方式处理中间件并提供不同的方法签名

### 异常过滤器
Nest 带有一个内置的异常层，负责处理应用中所有未处理的异常。当你的应用代码未处理异常时，该层会捕获该异常，然后自动发送适当的用户友好响应。

常见的 HTTP 异常：
* BadRequestException
* UnauthorizedException
* NotFoundException
* ForbiddenException
* NotAcceptableException
* RequestTimeoutException
* ConflictException
* GoneException
* HttpVersionNotSupportedException
* PayloadTooLargeException
* UnsupportedMediaTypeException
* UnprocessableEntityException
* InternalServerErrorException
* NotImplementedException
* ImATeapotException
* MethodNotAllowedException
* BadGatewayException
* ServiceUnavailableException
* GatewayTimeoutException
* PreconditionFailedException