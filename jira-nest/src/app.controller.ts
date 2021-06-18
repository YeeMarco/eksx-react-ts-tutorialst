import { Controller, Get ,Param} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  @Get()
  getHello(): string {
    return 'getHello';
  }
}
