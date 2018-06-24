import {
  Router
} from 'express'
import authController from '../controllers/auth'

const router = Router()

// Add POST - /api/register
router.post('/auth/register', authController.register)

// Add POST - /api/login
router.post('/auth/login', authController.login)

// Add POST - /api/logout
router.post('/auth/logout', authController.logout)

export default router
