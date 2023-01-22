import {
  IsString,
  IsNumber,
  Min,
  Max,
  IsLatitude,
  IsLongitude,
} from 'class-validator';
import { Transform } from 'class-transformer';

export class GetEstimatesDto {
  @IsString()
  make: string;

  @IsString()
  model: string;

  @IsNumber()
  @Min(1980)
  @Max(2050)
  @Transform(({ value }) => parseInt(value))
  year: number;

  @IsLongitude()
  @Transform(({ value }) => parseInt(value))
  lng: number;

  @IsLatitude()
  @Transform(({ value }) => parseInt(value))
  lat: number;

  @IsNumber()
  @Min(0)
  @Transform(({ value }) => parseInt(value))
  mileage: number;
}
