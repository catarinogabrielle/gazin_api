import { Request, Response } from 'express'
import { CreateDeviceService } from '../../services/device/CreateDeviceService'

class CreateDeviceController {
    async handle(request: Request, response: Response) {
        const { name, brand, code, cash_price, term_price, parcel, value_parcel, location } = request.body;

        const createDeviceService = new CreateDeviceService();

        const device = await createDeviceService.execute({
            name,
            brand,
            code,
            cash_price,
            term_price,
            parcel,
            value_parcel,
            location
        });

        return response.json(device);

    }
}

export { CreateDeviceController }