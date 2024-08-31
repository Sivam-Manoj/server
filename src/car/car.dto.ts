import { IsString, IsInt, Min, Max } from 'class-validator';

export class CreateCarDto {
  @IsString()
  make: string;

  @IsString()
  model: string;

  @IsInt()
  @Max(new Date().getFullYear())
  year: number;
}
