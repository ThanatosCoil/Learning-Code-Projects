import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { DestinationDto } from './dto/destination.dto';
import { UpdateDestinationDto } from './dto/update-destination.dto';

@Injectable()
export class DestinationService {
  constructor(private readonly prisma: PrismaService) {}

  async create(userId: string, destinationDto: DestinationDto) {
    return this.prisma.destination.create({
      data: {
        ...destinationDto,
        travelDate: new Date(destinationDto.travelDate).toISOString(),
        userId: +userId,
      },
    });
  }

  async findAll(userId: string) {
    return this.prisma.destination.findMany({
      where: {
        userId: +userId,
      },
    });
  }

  async findOne(id: string, userId: string) {
    const destination = await this.prisma.destination.findFirst({
      where: {
        id: +id,
        userId: +userId,
      },
    });
    if (!destination) {
      throw new NotFoundException('Destination not found with id: ' + id);
    }
    return destination;
  }

  async delete(id: string, userId: string) {
    await this.findOne(id, userId);

    return this.prisma.destination.delete({
      where: { id: +id },
    });
  }

  async update(
    id: string,
    userId: string,
    destinationDto: UpdateDestinationDto,
  ) {
    await this.findOne(id, userId);

    const data = { ...destinationDto };

    if (data.travelDate) {
      data.travelDate = new Date(data.travelDate).toISOString();
    }

    return this.prisma.destination.update({
      where: { id: +id },
      data: {
        name: data.name,
        travelDate: data.travelDate,
        notes: data.notes,
      },
    });
  }
}
