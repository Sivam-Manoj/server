import { IsString, IsInt, Min, Max } from 'class-validator';

export class CreateCarDto {
  @IsString()
  make: string;

  @IsString()
  model: string;

  @IsInt()
  @Min(1886) // Cars were invented around 1886
  @Max(new Date().getFullYear())
  year: number;
}
