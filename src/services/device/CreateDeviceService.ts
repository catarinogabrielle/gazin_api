import prismaClient from "../../prisma"

interface DeviceRequest {
    device: string;
    branch: string;
}

class CreateDeviceService {
    async execute({ device, branch }: DeviceRequest) {

        if (!device || !branch) {
            throw new Error("Campo vazio")
        }

        const device_ = await prismaClient.devices.create({
            data: {
                device: device,
                branch: branch
            }
        })

        return device_

    }
}

export { CreateDeviceService }