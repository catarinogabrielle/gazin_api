import { Router, Request, Response } from 'express'

import { CreateDeviceController } from './controllers/device/CreateDeviceController'
import { DetailDeviceController } from './controllers/device/DetailDeviceController'

const router = Router()

// --- ROTAS DEVICE ---
router.post('/device', new CreateDeviceController().handle)
router.get('/device', new DetailDeviceController().handle)

export { router }