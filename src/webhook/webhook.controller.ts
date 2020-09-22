import { Controller, Get, HttpStatus, Req, Res } from '@nestjs/common';

@Controller('webhook')
export class WebhookController {

    @Get("/")
    verifyToken(@Req() req: any, @Res() res: any){
        console.log(res);
        console.log(req);
        return res.status(HttpStatus.OK).json(req);
    }
}
