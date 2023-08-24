import prismaClient from "../../prisma";

class DetailDeviceService {
    async execute() {
        const device_ = await prismaClient.devices.findMany({
            select: {
                id: true,
                device: true,
                color: true,
                voltagem: true,
                branch: true,
                cash: true,
                card: true,
                wallet: true
            }
        })

        return device_;

    }
}

export { DetailDeviceService }