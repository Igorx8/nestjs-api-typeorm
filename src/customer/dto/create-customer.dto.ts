import { IsEmail, IsString, Length } from "class-validator";
import { CreateDateColumn, UpdateDateColumn } from "typeorm";

export class CreateCustomerDto {
  @Length(5, 50)
  @IsString()
  readonly name: string;

  @IsEmail()
  readonly email: string;

  @Length(10, 11)
  @IsString()
  readonly phone: string;

  @CreateDateColumn()
  readonly createdAt: Date;

  @UpdateDateColumn()
  readonly updatedAt: Date;
}
