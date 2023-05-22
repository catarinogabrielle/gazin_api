import prismaClient from "../../prisma"

interface VideoRequest {
    brand: string;
    video: string;
}

class CreateVideoService {
    async execute({ brand, video }: VideoRequest) {

        if (!brand || !video) {
            throw new Error("Campo vazio")
        }

        const video_ = await prismaClient.video.create({
            data: {
                brand: brand,
                video: video
            }
        })

        return video_

    }
}

export { CreateVideoService }