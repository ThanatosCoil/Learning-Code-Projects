import { IsDateString, IsOptional, IsString } from 'class-validator';
import { IsNotEmpty } from 'class-validator';

export class DestinationDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsDateString()
  @IsNotEmpty()
  travelDate: string;

  @IsOptional()
  @IsString()
  notes?: string;
}
