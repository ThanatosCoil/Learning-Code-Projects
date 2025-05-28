import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { v2 as cloudinary } from 'cloudinary';
import * as fs from 'fs';

@Injectable()
export class FileUploadService {
  constructor(private prisma: PrismaService) {
    cloudinary.config({
      cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET,
    });
  }

  async uploadFile(file: Express.Multer.File) {
    try {
      const result = await this.uploadToCloudinary(file.path);
      const newFile = await this.prisma.file.create({
        data: {
          filename: file.originalname,
          publicId: result.public_id,
          url: result.secure_url,
        },
      });
      //удаляем файл при успешной загрузке
      fs.unlinkSync(file.path);
      return newFile;
    } catch (error) {
      //удаляем файл при ошибке
      if (file.path && fs.existsSync(file.path)) {
        fs.unlinkSync(file.path);
      }
      throw new InternalServerErrorException('Failed to upload file');
    }
  }

  private async uploadToCloudinary(filePath: string): Promise<any> {
    return new Promise((resolve, reject) => {
      cloudinary.uploader.upload(filePath, (error, result) => {
        if (error) reject(error);
        resolve(result);
      });
    });
  }

  async deleteFile(fileId: string) {
    try {
      const file = await this.prisma.file.findUnique({
        where: { id: fileId },
      });
      if (!file) {
        throw new NotFoundException('File not found');
      }
      await cloudinary.uploader.destroy(file.publicId);
      await this.prisma.file.delete({
        where: { id: fileId },
      });

      return { message: 'File deleted successfully' };
    } catch (error) {
      throw new InternalServerErrorException('Failed to delete file');
    }
  }
}
