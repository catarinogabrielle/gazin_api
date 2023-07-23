import prismaClient from "../../prisma";

class DetailDeviceService {
    async execute() {
        const device_ = await prismaClient.devices.findMany({
            select: {
                id: true,
                device: true,
                branch: true
            }
        })

        return device_;

    }
}

export { DetailDeviceService }