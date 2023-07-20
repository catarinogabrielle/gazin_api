import prismaClient from "../../prisma";

class DetailLiveService {
    async execute() {
        const live_ = await prismaClient.live.findMany({
            select: {
                live: true,
                video: true
            }
        })

        return live_;

    }
}

export { DetailLiveService }