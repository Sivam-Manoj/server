import { IsString, IsInt, Max } from 'class-validator';

export class CreateCarDto {
  @IsString()
  make: string;

  @IsString()
  model: string;

  @IsInt()
  @Max(new Date().getFullYear())
  year: number;
}
