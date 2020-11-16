import express from 'express'
import testCtrl from '../controllers/test.controller'

const router = express.Router()

router.route('/api/Test/GetNames')
  .get(testCtrl.testGet) 

router.route('/api/Test/PostNames/')
  .post(testCtrl.testCreate)

router.route('/api/Test/PutNames/')
  .put(testCtrl.testPut)

router.route('/api/Test/DeleteNames/')
  .delete(testCtrl.testDelete)


export default router
