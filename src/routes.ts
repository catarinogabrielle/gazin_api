import { Router, Request, Response } from 'express'

import { CreateDeviceController } from './controllers/device/CreateDeviceController'
import { DetailDeviceController } from './controllers/device/DetailDeviceController'
import { CreateLocationController } from './controllers/location/CreateLocationController'
import { DetailLocationController } from './controllers/location/DetailLocationController'
import { CreateVideoController } from './controllers/video/CreateVideoController'
import { DetailVideoController } from './controllers/video/DetailVideoController'
import { CreateLiveController } from './controllers/live/CreateLiveController'
import { DetailLiveController } from './controllers/live/DetailLiveController'

const router = Router()

// --- ROTAS DEVICE ---
router.post('/device', new CreateDeviceController().handle)
router.get('/device', new DetailDeviceController().handle)

// --- ROTAS LOCATION ---
router.post('/location', new CreateLocationController().handle)
router.get('/location', new DetailLocationController().handle)

// --- ROTAS VIDEO ---
router.post('/video', new CreateVideoController().handle)
router.get('/video', new DetailVideoController().handle)

// --- ROTAS LIVE ---
router.post('/live', new CreateLiveController().handle)
router.get('/live', new DetailLiveController().handle)

export { router }