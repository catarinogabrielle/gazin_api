import prismaClient from "../../prisma"

interface UserRequest {
    code: string;
    region: string;
    cash_price: string;
    term_price: string;
    parcel: string;
    value_parcel: string;
}

class CreateLocationService {
    async execute({ code, region, cash_price, term_price, parcel, value_parcel }: UserRequest) {

        if (!code || !region || !cash_price || !term_price || !parcel || !value_parcel) {
            throw new Error("Campo vazio")
        }

        const locationAlreadyExists = await prismaClient.location.findFirst({
            where: {
                code: code,
            }
        })

        if (locationAlreadyExists) {
            throw new Error("nome ou codigo já existente")
        }

        const location = await prismaClient.location.create({
            data: {
                code: code,
                region: region,
                cash_price: cash_price,
                term_price: term_price,
                parcel: parcel,
                value_parcel: value_parcel
            }
        })

        return location

    }
}

export { CreateLocationService }