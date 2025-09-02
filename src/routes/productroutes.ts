import express from 'express';
const router = express.Router();

import {
  getAllProducts,
  getProductByName,
  updateProduct,
  deleteProduct,
  createProduct
} from '../controllers/productcontroller.ts';

router.get('/', getAllProducts);
router.get('/:name', getProductByName);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);
router.post('/', createProduct);
export const productRoutes = router;
export default router;