import { IsString, IsNotEmpty, IsNumber } from 'class-validator'

export class CreateCatDto {
  @IsNotEmpty({ message: '字段内容不能为空' })
  name: string;

  @IsNotEmpty({ message: '字段内容不能为空' })
  age: number;

  @IsNotEmpty({ message: '字段内容不能为空' })
  breed: string;
}

export class UpdateCatDto {
}

export class ListAllEntities {
	limit: string
}
