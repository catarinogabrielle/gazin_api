import prismaClient from "../../prisma";

class DetailVideoService {
    async execute() {
        const video_ = await prismaClient.video.findMany({
            select: {
                id: true,
                brand: true,
                code: true,
                video: true
            }
        })

        return video_;

    }
}

export { DetailVideoService }