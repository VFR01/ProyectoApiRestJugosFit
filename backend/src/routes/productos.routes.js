import { Router } from "express";
import { getProductos, createProductos, updateProductos, deleteProductos, getProducto, deleteProducto, updateProducto} from "../controllers/productos.controller.js";

const router = Router()

router.get('/productos',getProductos)
router.get('/productos/:id',getProducto)
router.post('/productos',createProductos)
router.put('/productos',updateProductos)
router.patch('/productos/:id',updateProducto)
router.delete('/productos',deleteProductos)
router.delete('/productos/:id',deleteProducto)

export default router