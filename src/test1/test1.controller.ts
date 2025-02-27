import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, HttpStatus, UseFilters } from '@nestjs/common';
import { Test1Service } from './test1.service';
import { CreateTest1Dto } from './dto/create-test1.dto';
import { UpdateTest1Dto } from './dto/update-test1.dto';
import { ForbiddenException } from 'src/exception/forbidden.exception';
import { HttpExceptionFilter } from 'src/exception/http-exception.filter';

@Controller('test1')
// @UseFilters(new HttpExceptionFilter())
export class Test1Controller {
  constructor(private readonly test1Service: Test1Service) {}

  @Post()
  create(@Body() createTest1Dto: CreateTest1Dto) {
    console.log('createTest1Dto', createTest1Dto)
    return this.test1Service.create(createTest1Dto);
  }

  @Get()
  
  findAll() {
    const list = this.test1Service.findAll();
    if (list.length) {
      return list
    }
    throw new ForbiddenException()
    // throw new HttpException('Forbidden', HttpStatus.FORBIDDEN)
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.test1Service.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTest1Dto: UpdateTest1Dto) {
    return this.test1Service.update(+id, updateTest1Dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.test1Service.remove(+id);
  }
}
