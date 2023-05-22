import prismaClient from "../../prisma"

interface DeviceRequest {
    name: string;
    brand: string;
    code: string;
    cash_price: string;
    term_price: string;
    parcel: string;
    value_parcel: string;
    location: boolean;
}

class CreateDeviceService {
    async execute({ name, brand, code, cash_price, term_price, parcel, value_parcel, location }: DeviceRequest) {

        if (!name || !brand || !code || !cash_price || !term_price || !parcel || !value_parcel || !location) {
            throw new Error("Campo vazio")
        }

        const deviceAlreadyExists = await prismaClient.device.findFirst({
            where: {
                code: code,
                name: name
            }
        })

        if (deviceAlreadyExists) {
            throw new Error("nome ou codigo já existente")
        }

        const device = await prismaClient.device.create({
            data: {
                name: name,
                brand: brand,
                code: code,
                cash_price: cash_price,
                term_price: term_price,
                parcel: parcel,
                value_parcel: value_parcel,
                location: location
            }
        })

        return device

    }
}

export { CreateDeviceService }