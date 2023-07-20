import { Request, Response } from 'express'
import { CreateDeviceService } from '../../services/device/CreateDeviceService'

class CreateDeviceController {
    async handle(request: Request, response: Response) {
        const { device, price, price_card, price_desk, branch } = request.body;

        const createDeviceService = new CreateDeviceService();

        const device_ = await createDeviceService.execute({
            device,
            price,
            price_card,
            price_desk,
            branch
        });

        return response.json(device_);

    }
}

export { CreateDeviceController }