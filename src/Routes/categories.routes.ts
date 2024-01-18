import { Router } from 'express'

import controller from '../controllers/categories.controller'

const categoriesRoutes = Router()

categoriesRoutes.route('/').get(controller.getAllCategories)

export default categoriesRoutes
