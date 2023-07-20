import prismaClient from "../../prisma";

class DetailDeviceService {
    async execute() {
        const device_ = await prismaClient.devices.findMany({
            select: {
                device: true,
                price: true,
                price_card: true,
                price_desk: true,
                branch: true
            }
        })

        return device_;

    }
}

export { DetailDeviceService }