
import { IsString, IsInt } from 'class-validator';

export class CreateTest2Dto {
  @IsString()
  name: string;

  @IsInt()
  age: number;

  @IsString()
  breed: string;
}
