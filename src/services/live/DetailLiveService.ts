import prismaClient from "../../prisma";

class DetailLiveService {
    async execute() {
        const device = await prismaClient.live.findMany({
            select: {
                live: true,
                video: true
            }
        })

        return device;

    }
}

export { DetailLiveService }