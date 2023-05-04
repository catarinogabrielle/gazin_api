import prismaClient from "../../prisma"

interface UserRequest {
    name: string;
    code: string;
    cash_price: string;
    term_price: string;
    parcel: string;
    value_parcel: string;
    location: boolean;
}

class CreateDeviceService {
    async execute({ name, code, cash_price, term_price, parcel, value_parcel, location }: UserRequest) {

        if (!name || !code || !cash_price || !term_price || !parcel || !value_parcel || !location) {
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