import {
  Router
} from 'express'
import ConversationController from '../controllers/conversation'

const router = Router()

router.route('/conversations')
  /** GET /api/conversations - Get conversations list */
  .get(ConversationController.list)

// Get a conversation message
router.get('/conversation/:id', ConversationController.get)

router.post('/conversation', ConversationController.create)

router.post('/send-message/:conversationId', ConversationController.createMessage)

export default router
