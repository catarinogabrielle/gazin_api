import { Request, Response } from 'express'
import { CreateVideoService } from '../../services/video/CreateVideoService'

class CreateVideoController {
    async handle(request: Request, response: Response) {
        const { brand, code, video } = request.body;

        const createVideoService = new CreateVideoService();

        const video_ = await createVideoService.execute({
            brand,
            code,
            video
        });

        return response.json(video_);

    }
}

export { CreateVideoController }