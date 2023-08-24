import { Request, Response } from 'express'
import { UpdateDeviceService } from '../../services/device/UpdateDeviceService'

class UpdateDeviceController {
  async handle(request: Request, response: Response) {
    const { device_id, cash, card, wallet } = request.body;

    const updatedevice = new UpdateDeviceService();

    const device = await updatedevice.execute({
      cash,
      card,
      wallet,
      device_id
    })

    return response.json(device);

  }
}

export { UpdateDeviceController }