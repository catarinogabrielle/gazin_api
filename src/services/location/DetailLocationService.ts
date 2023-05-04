import prismaClient from "../../prisma";

class DetailLocationService {
    async execute() {
        const device = await prismaClient.location.findMany({
            select: {
                id: true,
                code: true,
                region: true,
                cash_price: true,
                term_price: true,
                parcel: true,
                value_parcel: true
            }
        })

        return device;

    }
}

export { DetailLocationService }