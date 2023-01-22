import { IsString, IsNumber, Min, Max, IsLatitude, IsLongitude, IsBoolean } from 'class-validator'

export class CreateReportDto {
    @IsString()
    make: string;

    @IsString()
    model: string;

    @IsNumber()
    @Min(1980)
    @Max(2050)
    year: number;

    @IsLongitude()
    lng: number;

    @IsLatitude()
    lat: number;

    @IsNumber()
    @Min(0)
    mileage: number;

    @IsNumber()
    @Min(0)
    price: number;

    isApproved: boolean;
}