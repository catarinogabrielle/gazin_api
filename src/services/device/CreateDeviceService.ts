import prismaClient from "../../prisma"

interface DeviceRequest {
    device: string;
    color: string;
    voltagem: string;
    branch: string;
    cash: string;
    card: string;
    wallet: string;
}

class CreateDeviceService {
    async execute({ device, color, voltagem, branch, cash, card, wallet }: DeviceRequest) {

        if (!device || !color || !branch || !cash || !card || !wallet) {
            throw new Error("Campo vazio")
        }

        const device_ = await prismaClient.devices.create({
            data: {
                device: device,
                color: color,
                voltagem: voltagem,
                branch: branch,
                cash: cash,
                card: card,
                wallet: wallet
            }
        })

        return device_

    }
}

export { CreateDeviceService }