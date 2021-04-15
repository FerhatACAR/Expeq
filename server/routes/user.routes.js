import express from 'express'
import userCtrl from '../controllers/user.controller'
const router = express.Router()

router.route('/api/User/GetUserById')
  .get(userCtrl.GetUserById)

router.route('/api/User/UserLogin')
  .get(userCtrl.UserLogin)

router.route('/api/User/UserSignUp/')
  .post(userCtrl.UserSignUp)

router.route('/api/User/UserComment/')
  .post(userCtrl.UserComment)

router.route('/api/User/GetComments')
  .get(userCtrl.GetComments)

export default router
