import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  // Сервисы и контроллеры связываются через конструктор путем внедрения зависимостей
  constructor(private readonly appService: AppService) {}

  // декоратор @Get() указывает на то что этот метод будет вызываться при GET запросе на корневой маршрут
  @Get()
  // метод getHello возвращает строку
  getHello(): string {
    // вызывает метод getHello из сервиса appService
    return this.appService.getHello();
  }
}
