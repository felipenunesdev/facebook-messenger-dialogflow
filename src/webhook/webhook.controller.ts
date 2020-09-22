import { Controller, Get, HttpStatus, Req, Res } from '@nestjs/common';

@Controller('webhook')
export class WebhookController {

    @Get("/")
    verifyToken(@Res() res: any){
        console.log(res);
        return res.status(HttpStatus.OK).json(res["hub"].challenge);
    }
}
