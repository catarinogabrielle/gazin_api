import prismaClient from "../../prisma";

interface DeviceRequest {
    device_id: string;
    cash: string;
    card: string;
    wallet: string;
}

class UpdateDeviceService {
    async execute({ device_id, cash, card, wallet }: DeviceRequest) {

        const dev = await prismaClient.devices.update({
            where: {
                id: device_id,
            },
            data: {
                cash: cash,
                card: card,
                wallet: wallet
            }
        })

        return dev;

    }
}

export { UpdateDeviceService }