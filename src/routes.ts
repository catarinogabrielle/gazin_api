import { Router, Request, Response } from 'express'

import { CreateVideoController } from './controllers/video/CreateVideoController'
import { DetailVideoController } from './controllers/video/DetailVideoController'
import { CreateLiveController } from './controllers/live/CreateLiveController'
import { DetailLiveController } from './controllers/live/DetailLiveController'

const router = Router()

// --- ROTAS VIDEO ---
router.post('/video', new CreateVideoController().handle)
router.get('/video', new DetailVideoController().handle)

// --- ROTAS LIVE ---
router.post('/live', new CreateLiveController().handle)
router.get('/live', new DetailLiveController().handle)

export { router }