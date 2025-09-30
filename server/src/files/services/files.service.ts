import {Injectable} from '@nestjs/common';
import ImageKit from "imagekit";
import {UploadFile} from "../controllers/files.resolver";
import {PrismaService} from "../../common/services/prisma.service";
import {UploadDto} from "../dto/upload.dto";


@Injectable()
export class FilesService {
    private imageKit: ImageKit

    constructor(
        private prismaService: PrismaService,
    ) {
        this.imageKit = new ImageKit({
            privateKey: process.env.IMAGEKIT_PRIVATE_KEY || "",
            publicKey: process.env.IMAGEKIT_PUBLIC_KEY || "",
            urlEndpoint: `https://ik.imagekit.io/${process.env.IMAGEKIT_ID}/`
        });
    }

    async upload(file: UploadFile): Promise<UploadDto> {
        try {
            const result = await this.imageKit.upload({
                file: file.buffer,
                fileName: file.originalname,
                folder: '/uploads',
            });
            const fileFromDb = await this.prismaService.file.create({
                data: {
                    path: result.url
                }
            })
            return {url: result.url, id: fileFromDb.id};
        } catch (error) {
            console.error('ImageKit upload error:', error);
            throw new Error('Failed to upload image');
        }
    }

    // async uploadMultiple(files: UploadFile[]): Promise<string[]> {
    //     const uploadPromises = files.map(file => this.upload(file));
    //     return await Promise.all(uploadPromises);
    // }
}
