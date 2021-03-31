import express from 'express'
import sharedCtrl from '../controllers/shared.controller'

const router = express.Router()

router.route('/api/Shared/GetCities')
  .get(sharedCtrl.citiesGet)

router.route('/api/Shared/GetProfessions')
  .get(sharedCtrl.professionsGet)

/*router.route('/api/Test/PutNames/')
  .put(testCtrl.testPut)

router.route('/api/Test/DeleteNames/')
  .delete(testCtrl.testDelete)*/


export default router
