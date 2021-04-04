import express from 'express'
import sharedCtrl from '../controllers/shared.controller'

const router = express.Router()

router.route('/api/Shared/GetCities')
  .get(sharedCtrl.citiesGet)

router.route('/api/Shared/GetProfessions')
  .get(sharedCtrl.professionsGet)

router.route('/api/Shared/getUsersBySelected')
  .get(sharedCtrl.getUsersBySelected)


export default router
