import { Request, Response } from 'express'

import { Products } from '../models/products.models'

import categories from '../mocks/products.data.json'

const AllProducts: Array<Products> = categories

const getAllProducts = (_req: Request, res: Response) => {
  return res.json(AllProducts)
}

export default { getAllProducts }
