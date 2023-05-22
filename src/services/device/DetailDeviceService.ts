import prismaClient from "../../prisma";

class DetailDeviceService {
    async execute() {
        const device = await prismaClient.device.findMany({
            select: {
                id: true,
                name: true,
                brand: true,
                code: true,
                cash_price: true,
                term_price: true,
                parcel: true,
                value_parcel: true,
                location: true
            }
        })

        return device;

    }
}

export { DetailDeviceService }