import { Router, Request, Response } from 'express'

import { CreateVideoController } from './controllers/video/CreateVideoController'
import { DetailVideoController } from './controllers/video/DetailVideoController'
import { CreateLiveController } from './controllers/live/CreateLiveController'
import { DetailLiveController } from './controllers/live/DetailLiveController'
import { CreateDeviceController } from './controllers/device/CreateDeviceController'
import { DetailDeviceController } from './controllers/device/DetailDeviceController'
import { RemoveDeviceController } from './controllers/device/RemoveDeviceController'
import { UpdateDeviceController } from './controllers/device/UpdateDeviceController'

const router = Router()

// --- ROTAS VIDEO ---
router.post('/video', new CreateVideoController().handle)
router.get('/video', new DetailVideoController().handle)

// --- ROTAS LIVE ---
router.post('/live', new CreateLiveController().handle)
router.get('/live', new DetailLiveController().handle)

// --- ROTAS DEVICES ---
router.post('/devices', new CreateDeviceController().handle)
router.get('/devices', new DetailDeviceController().handle)
router.delete('/devices', new RemoveDeviceController().handle)
router.put('/devices', new UpdateDeviceController().handle)

export { router }