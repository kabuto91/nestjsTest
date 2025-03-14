import { Controller, UseInterceptors, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { Test2Service } from './test2.service';
import { Test1Service } from '../test1/test1.service'
import { CreateTest2Dto } from './dto/create-test2.dto';
import { UpdateTest2Dto } from './dto/update-test2.dto';
import { ValidationPipe } from 'src/validation/validation1.pipe';
import { TransformInterceptor } from 'src/interceptor/transform.interceptor'

@Controller('test2')
@UseInterceptors(TransformInterceptor)
export class Test2Controller {
  constructor(
    private readonly test2Service: Test2Service,
    private readonly test1Service: Test1Service
  ) {}

  @Post()
  create(@Body(new ValidationPipe()) createTest2Dto: CreateTest2Dto) {
    return this.test2Service.create(createTest2Dto);
  }

  @Get()
  findAll() {
    return this.test1Service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.test2Service.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTest2Dto: UpdateTest2Dto) {
    return this.test2Service.update(+id, updateTest2Dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.test2Service.remove(+id);
  }
}
