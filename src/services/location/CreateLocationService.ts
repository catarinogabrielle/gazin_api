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
    street: string;
    postal_code: string;
}

class CreateLocationService {
    async execute({ code, region, city, store, id_store, cash_price, term_price, parcel, value_parcel, street, postal_code }: UserRequest) {

        if (!code || !region || !city || !store || !id_store || !cash_price || !term_price || !parcel || !value_parcel || !street || !postal_code) {
            throw new Error("Campo vazio")
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
                value_parcel: value_parcel,
                street: street,
                postal_code: postal_code
            }
        })

        return location

    }
}

export { CreateLocationService }