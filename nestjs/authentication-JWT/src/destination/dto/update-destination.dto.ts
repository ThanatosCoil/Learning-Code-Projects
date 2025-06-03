import { DestinationDto } from './destination.dto';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateDestinationDto extends PartialType(DestinationDto) {}
