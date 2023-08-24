import { Request, Response } from "express";
import { RemoveDeviceService } from '../../services/device/RemoveDeviceService'

class RemoveDeviceController {
    async handle(req: Request, res: Response) {
        const device_id = req.query.device_id as string;

        const removeDevice = new RemoveDeviceService();

        const device = await removeDevice.execute({
            device_id
        })

        return res.json(device);

    }
}

export { RemoveDeviceController }