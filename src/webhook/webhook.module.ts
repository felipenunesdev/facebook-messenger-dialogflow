import { WebhookController } from './webhook.controller';
import { Module } from '@nestjs/common';
import { WebhookService } from './webhook.service';

@Module({
    imports: [],
    controllers: [WebhookController],
    providers: [WebhookService],
})
export class WebhookModule {}
