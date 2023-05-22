import prismaClient from "../../prisma"

interface VideoRequest {
    brand: string;
    code: string;
    video: string;
}

class CreateVideoService {
    async execute({ brand, code, video }: VideoRequest) {

        if (!brand || !code || !video) {
            throw new Error("Campo vazio")
        }

        const video_ = await prismaClient.video.create({
            data: {
                brand: brand,
                code: code,
                video: video
            }
        })

        return video_

    }
}

export { CreateVideoService }