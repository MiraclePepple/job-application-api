import {
  IsNotEmpty,
  IsString,
  MaxLength,
} from 'class-validator';

export class CreateJobDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(200)
  title: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(200)
  company: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(150)
  location: string;
}