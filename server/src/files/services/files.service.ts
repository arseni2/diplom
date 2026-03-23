import { Injectable, BadRequestException } from '@nestjs/common';
import { UploadFile } from "../controllers/files.resolver";
import { PrismaService } from "../../common/services/prisma.service";
import { UploadDto } from "../dto/upload.dto";
import { join, extname } from 'path';
import { existsSync, mkdirSync, writeFileSync } from 'fs';


@Injectable()
export class FilesService {
    private readonly uploadPath = join(process.cwd(), 'static', 'uploads');

    constructor(
        private prismaService: PrismaService,
    ) {
        // Создаем папку при инициализации сервиса
        if (!existsSync(this.uploadPath)) {
            mkdirSync(this.uploadPath, { recursive: true });
        }
    }

    async upload(file: UploadFile, houseId?: string | null): Promise<UploadDto> {
        try {
            const fileExtension = extname(file.originalname).toLowerCase();
            const allowedExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.pdf'];
            
            if (!allowedExtensions.includes(fileExtension)) {
                throw new BadRequestException('Недопустимый формат файла');
            }

            const fileName = `${Date.now()}${fileExtension}`;
            const filePath = join(this.uploadPath, fileName);
            const relativePath = `/uploads/${fileName}`;

            writeFileSync(filePath, file.buffer);

            const fileEntity = await this.prismaService.file.create({
                data: {
                    path: `${process.env.BACKEND_URL}${relativePath}`,           
                    size: file.buffer.length,     
                    houseId: houseId ? Number(houseId) : undefined,
                },
            });

            return {
                url: `${process.env.BACKEND_URL}${relativePath}`,
                id: fileEntity.id,
            };

        } catch (error) {
            console.error('File upload error:', error);
            if (error instanceof BadRequestException) throw error;
            throw new Error('Failed to upload file');
        }
    }
}