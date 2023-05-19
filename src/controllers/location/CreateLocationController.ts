import { Request, Response } from 'express'
import { CreateLocationService } from '../../services/location/CreateLocationService'

class CreateLocationController {
    async handle(request: Request, response: Response) {
        const { code, region, city, store, id_store, cash_price, term_price, parcel, value_parcel, street, street_number } = request.body;

        const createLocationService = new CreateLocationService();

        const location = await createLocationService.execute({
            code,
            region,
            city,
            store,
            id_store,
            cash_price,
            term_price,
            parcel,
            value_parcel,
            street,
            street_number
        });

        return response.json(location);

    }
}

export { CreateLocationController }