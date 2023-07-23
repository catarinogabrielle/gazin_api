import prismaClient from "../../prisma"

interface DeviceRequest {
    device: string;
    color: string;
    branch: string;
}

class CreateDeviceService {
    async execute({ device, color, branch }: DeviceRequest) {

        if (!device || !color || !branch) {
            throw new Error("Campo vazio")
        }

        const device_ = await prismaClient.devices.create({
            data: {
                device: device,
                color: color,
                branch: branch
            }
        })

        return device_

    }
}

export { CreateDeviceService }