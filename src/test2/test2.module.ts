import { Module } from '@nestjs/common';
import { Test2Service } from './test2.service';
import { Test2Controller } from './test2.controller';
import { Test1Module } from '../test1/test1.module'

@Module({
  imports: [Test1Module],
  controllers: [Test2Controller],
  providers: [Test2Service],
})
export class Test2Module {}
