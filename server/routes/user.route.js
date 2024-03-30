import express from 'express'
import {
  test,
  updateUser,
  deleteUser,
  getUser,
  upload,
  sendEmail,
  getMyOrders,
  getAllOrdersWithUserDetails,
  requestRefund,
} from '../controllers/user.controller.js'
import { verifyToken } from '../utils/verifyUser.js'

const router = express.Router()

router.get('/test', test)
router.post('/upload', upload)
router.post('/update/:id', updateUser)
router.delete('/delete/:id', verifyToken, deleteUser)
router.get('/admin-all-orders', getAllOrdersWithUserDetails)
router.post('/myordersnew', getMyOrders)
router.post('/request-refund', requestRefund)
router.get('/:id', verifyToken, getUser)
router.post('/send-email', sendEmail)
export default router
