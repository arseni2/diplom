import {Injectable} from '@nestjs/common';
import {SendMessageDto} from "../dto/SendMessage.dto";
import {SendMessageContactDto} from '../dto/SendMessageContact.dto';

@Injectable()
export class TgService {
    private token = "8398198231:AAEIeOTWxHz1RtyK_cRYfkrDCWzK7Ppy5y8";
    private chat_id = -5021476288;

    async sendMessage(dto: SendMessageDto) {

        const text = `Новая заявка риелтора:\n\nФИО: ${dto.fullName}\nEmail: ${dto.email}\nTelegram: ${dto.telegram}\nТелефон: ${dto.phone}`;

        return await fetch(`https://api.telegram.org/bot${this.token}/sendMessage`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({chat_id: this.chat_id, text}),
        })
    }

    async sendMessageContact(dto: SendMessageContactDto) {
        const text = `Контактная форма:\n\nEmail: ${dto.email}\nMessage: ${dto.message}\nТелефон: ${dto.phone}`;

        return await fetch(`https://api.telegram.org/bot${this.token}/sendMessage`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({chat_id: this.chat_id, text}),
        })
    }
}
