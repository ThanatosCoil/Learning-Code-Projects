import {
  Controller,
  Post,
  UseGuards,
  Body,
  Request,
  Get,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { DestinationService } from './destination.service';
import { DestinationDto } from './dto/destination.dto';
import { UpdateDestinationDto } from './dto/update-destination.dto';
@Controller('destination')
@UseGuards(JwtAuthGuard)
export class DestinationController {
  constructor(private readonly destinationService: DestinationService) {}

  @Post()
  create(@Request() req, @Body() destinationDto: DestinationDto) {
    return this.destinationService.create(req.user.userId, destinationDto);
  }

  @Get()
  findAll(@Request() req) {
    return this.destinationService.findAll(req.user.userId);
  }

  @Get(':id')
  findOne(@Request() req, @Param('id') id: string) {
    return this.destinationService.findOne(id, req.user.userId);
  }

  @Patch(':id')
  update(
    @Request() req,
    @Param('id') id: string,
    @Body() destinationDto: UpdateDestinationDto,
  ) {
    return this.destinationService.update(id, req.user.userId, destinationDto);
  }

  @Delete(':id')
  delete(@Request() req, @Param('id') id: string) {
    return this.destinationService.delete(id, req.user.userId);
  }
}
