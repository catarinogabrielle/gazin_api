import { Request, Response } from 'express'
import { DetailLiveService } from '../../services/live/DetailLiveService'

class DetailLiveController {
    async handle(request: Request, response: Response) {
        const detailLiveService = new DetailLiveService();

        const detailLive = await detailLiveService.execute();

        return response.json(detailLive);

    }
}

export { DetailLiveController }