import prismaClient from "../../prisma"

interface LiveRequest {
    device: string;
    price: string;
    price_card: string;
    price_desk: string;
    branch: string;
}

class CreateDeviceService {
    async execute({ device, price, price_card, price_desk, branch }: LiveRequest) {

        if (!device || !price || !price_card || !price_desk || !branch) {
            throw new Error("Campo vazio")
        }

        const device_ = await prismaClient.devices.create({
            data: {
                device: device,
                price: price,
                price_card: price_card,
                price_desk: price_desk,
                branch: branch
            }
        })

        return device_

    }
}

export { CreateDeviceService }