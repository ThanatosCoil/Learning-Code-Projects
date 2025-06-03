import { Injectable } from '@nestjs/common';

// декоратор @Injectable() указывает на то что этот класс является сервисом и может быть внедрен в контроллеры
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello Nest!';
  }
}
