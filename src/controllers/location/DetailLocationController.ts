import { Request, Response } from 'express'
import { DetailLocationService } from '../../services/location/DetailLocationService'

class DetailLocationController {
    async handle(request: Request, response: Response) {
        const detailLocationService = new DetailLocationService();

        const detailLocation = await detailLocationService.execute();

        return response.json(detailLocation);

    }
}

export { DetailLocationController }