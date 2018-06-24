import {
  Router
} from 'express'
import userController from '../controllers/user'

const router = Router()

router.route('/users/me')
  /** GET /api/users - Get logged in user data */
  .get(userController.me)

router.route('/users')
  /** GET /api/users - Get list of users */
  .get(userController.list)

router.route('/users/:userId')
  /** GET /api/users/:userId - Get single user */
  .get(userController.get)

/** Load user when API with userId route parameter is hit */
router.param('userId', userController.load)

export default router
