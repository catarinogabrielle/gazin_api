import prismaClient from "../../prisma"

interface LiveRequest {
    live: boolean;
    video: string;
}

class CreateLiveService {
    async execute({ live, video }: LiveRequest) {

        if (!live || !video) {
            throw new Error("Campo vazio")
        }

        const live_ = await prismaClient.live.create({
            data: {
                live: live,
                video: video
            }
        })

        return live_

    }
}

export { CreateLiveService }