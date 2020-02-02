import express from 'express'

import HelloController from './app/controllers/HelloController'

const router = express.Router()

router.get('/hello', HelloController)

export default router
