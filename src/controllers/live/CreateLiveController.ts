import { Request, Response } from 'express'
import { CreateLiveService } from '../../services/live/CreateLiveService'

class CreateLiveController {
    async handle(request: Request, response: Response) {
        const { live, video } = request.body;

        const createLiveService = new CreateLiveService();

        const live_ = await createLiveService.execute({
            live,
            video
        });

        return response.json(live_);

    }
}

export { CreateLiveController }