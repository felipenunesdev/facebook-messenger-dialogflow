import { WebhookModule } from './webhook/webhook.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [WebhookModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
