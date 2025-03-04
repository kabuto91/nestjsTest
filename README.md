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


## 核心概论
###  Module
模块是一个用 @Module() 装饰器注释的类。此装饰器提供 Nest 用于有效组织和管理应用结构的元数据。  

@Module() 装饰器采用具有描述模块的属性的单个对象：
* providers：将由 Nest 注入器实例化并且至少可以在该模块中共享的提供程序
* controllers：此模块中定义的必须实例化的控制器集
* imports：导出此模块所需的提供程序的导入模块列表
* exports：这个模块提供的 providers 的子集应该在导入这个模块的其他模块中可用。你可以使用提供器本身或仅使用其令牌（provide 值）

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

### 管道
管道是一个带有 @Injectable() 装饰器的类，它实现了 PipeTransform 接口。管道有两个主要用途：
* 转换输入数据（例如，从字符串转换为整数）
* 对输入数据应用验证规则（例如，验证字符串是否为电子邮件）

#### 内置管道

Nest 附带几个开箱即用的管道：
* ValidationPipe
* ParseIntPipe
* ParseBoolPipe
* ParseArrayPipe
* ParseUUIDPipe
* ParseEnumPipe
* DefaultValuePipe
* ParseFilePipe
* ParseDatePipe

