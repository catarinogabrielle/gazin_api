import { Request, Response } from 'express'
import { DetailDeviceService } from '../../services/device/DetailDeviceService'

class DetailDeviceController {
    async handle(request: Request, response: Response) {
        const detailDeviceService = new DetailDeviceService();

        const detailDevice = await detailDeviceService.execute();

        return response.json(detailDevice);

    }
}

export { DetailDeviceController }