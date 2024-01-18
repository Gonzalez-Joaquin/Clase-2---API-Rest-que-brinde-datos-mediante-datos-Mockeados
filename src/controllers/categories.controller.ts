import { Request, Response } from 'express'

import { Categories } from '../models/categories.models'

import categories from '../mocks/categories.data.json'

const AllCategories: Array<Categories> = categories

const getAllCategories = (_req: Request, res: Response) => {
  return res.json(AllCategories)
}

export default { getAllCategories }