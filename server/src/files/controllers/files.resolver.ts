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
        @Args('houseId', { type: () => String, nullable: true })
        houseId: string | null,
        @Args({ name: 'files', type: () => [GraphQLUpload] })
        filesUpload: Promise<FileUpload>[],
    ): Promise<UploadDto[]> {
        const uploadPromises = filesUpload.map(async (fileUploadPromise) => {
            const { createReadStream, filename } = await fileUploadPromise;

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

            return await this.filesService.upload(file, houseId);
        });

        return await Promise.all(uploadPromises);
    }

}
