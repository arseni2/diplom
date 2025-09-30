import {Args, Mutation, Resolver} from '@nestjs/graphql';
import {FilesService} from '../services/files.service';
import {type FileUpload, GraphQLUpload} from 'graphql-upload-ts';
import {UploadDto} from "../dto/upload.dto";

export interface UploadFile {
    buffer: Buffer;
    originalname: string;
}

@Resolver()
export class FilesResolver {
    constructor(
        private readonly filesService: FilesService
    ) {
    }

    @Mutation(() => [UploadDto], {name: "uploadFiles"})
    async uploadFiles(
        @Args({ name: 'files', type: () => [GraphQLUpload] })
        filesUpload: Promise<FileUpload>[], // ⚠️ Важно: это массив промисов
    ): Promise<UploadDto[]> {
        const uploadPromises = filesUpload.map(async (fileUploadPromise) => {
            const { createReadStream, filename } = await fileUploadPromise; // ⚠️ ждём объект

            const chunks: Buffer[] = [];
            const stream = createReadStream();

            for await (const chunk of stream) {
                chunks.push(chunk);
            }

            const buffer = Buffer.concat(chunks);

            const file: UploadFile = {
                buffer,
                originalname: filename,
            };

            return await this.filesService.upload(file);
        });

        return await Promise.all(uploadPromises);
    }

}
