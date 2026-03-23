import {Body, Controller, Post} from '@nestjs/common';
import {SendMessageDto} from "../dto/SendMessage.dto";
import {TgService} from "../service/tg.service";
import {SendMessageContactDto} from "../dto/SendMessageContact.dto";

@Controller('tg')
export class TgController {
    constructor(private readonly tgService: TgService) {
    }

    @Post()
    sendMessage(@Body() dto: SendMessageDto) {
        return this.tgService.sendMessage(dto)
    }

    @Post("contact")
    sendMessageContact(@Body() dto: SendMessageContactDto) {
        return this.tgService.sendMessageContact(dto)
    }
}
