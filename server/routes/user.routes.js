import express from 'express'
import userCtrl from '../controllers/user.controller'
const router = express.Router()

router.route('/api/User/GetUserById')
  .get(userCtrl.GetUserById)

router.route('/api/User/UserLogin')
  .get(userCtrl.UserLogin)

router.route('/api/User/UserSignUp/')
  .post(userCtrl.UserSignUp)

export default router
