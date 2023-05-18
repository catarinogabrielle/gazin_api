import prismaClient from "../../prisma"

interface UserRequest {
    code: string;
    region: string;
    city: string;
    store: string;
    id_store: string;
    cash_price: string;
    term_price: string;
    parcel: string;
    value_parcel: string;
}

class CreateLocationService {
    async execute({ code, region, city, store, id_store, cash_price, term_price, parcel, value_parcel }: UserRequest) {

        if (!code || !region || !city || !store || !id_store || !cash_price || !term_price || !parcel || !value_parcel) {
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
                city: city,
                store: store,
                id_store: id_store,
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