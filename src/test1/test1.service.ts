import { Injectable } from '@nestjs/common';
import { CreateTest1Dto } from './dto/create-test1.dto';
import { UpdateTest1Dto } from './dto/update-test1.dto';

@Injectable()
export class Test1Service {
  private test1: any[] = []
  create(createTest1Dto: CreateTest1Dto) {
    this.test1.push(createTest1Dto)
    return 'This action adds a new test1';
  }

  findAll() {
    return this.test1;
  }

  findOne(id: number) {
    return `This action returns a #${id} test1`;
  }

  update(id: number, updateTest1Dto: UpdateTest1Dto) {
    return `This action updates a #${id} test1`;
  }

  remove(id: number) {
    return `This action removes a #${id} test1`;
  }
}
