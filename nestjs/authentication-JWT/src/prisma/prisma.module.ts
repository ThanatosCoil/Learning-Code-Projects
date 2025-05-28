import { Module, Global } from '@nestjs/common';
import { PrismaService } from './prisma.service';

// Фактически, декоратор @Global() означает только то, что не нужно явно импортировать модуль с помощью imports: [PrismaModule] в другие модули
@Global()
@Module({
  providers: [PrismaService],
  // явно указывает, какие именно провайдеры из этого модуля должны быть доступны другим модулям
  exports: [PrismaService],
})
export class PrismaModule {}
