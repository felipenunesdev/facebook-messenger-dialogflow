import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { response } from 'express';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post("/messages")
  getMessages(@Res() response: any, @Body() body: any): string {
    console.log(body)
    console.log(response)
    return this.appService.getHello();
  }
}
