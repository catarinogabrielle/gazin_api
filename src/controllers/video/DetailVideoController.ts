import { Request, Response } from 'express'
import { DetailVideoService } from '../../services/video/DetailVideoService'

class DetailVideoController {
    async handle(request: Request, response: Response) {
        const detailVideoService = new DetailVideoService();

        const detailVideo = await detailVideoService.execute();

        return response.json(detailVideo);

    }
}

export { DetailVideoController }