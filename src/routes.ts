import { Router, Request, Response } from 'express'

import { CreateDeviceController } from './controllers/device/CreateDeviceController'
import { DetailDeviceController } from './controllers/device/DetailDeviceController'
import { CreateLocationController } from './controllers/location/CreateLocationController'
import { DetailLocationController } from './controllers/location/DetailLocationController'

const router = Router()

// --- ROTAS DEVICE ---
router.post('/device', new CreateDeviceController().handle)
router.get('/device', new DetailDeviceController().handle)

// --- ROTAS LOCATION ---
router.post('/location', new CreateLocationController().handle)
router.get('/location', new DetailLocationController().handle)

export { router }