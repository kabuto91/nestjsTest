import { IsString, IsNotEmpty, IsNumber } from 'class-validator'

export class CreateTest1Dto {
	@IsNotEmpty({ message: '字段内容不能为空' })
	@IsString({ message: 'id字段需为String类型' })
	id: string

	@IsNotEmpty({ message: '字段内容不能为空' })
	age: number
}
