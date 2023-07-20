import prismaClient from "../../prisma";

interface DeviceRequest {
    device_id: string;
}

class RemoveDeviceService {
    async execute({ device_id }: DeviceRequest) {

        const device = await prismaClient.devices.delete({
            where: {
                id: device_id
            }
        })

        return device;

    }
}

export { RemoveDeviceService }