import { Router } from "express";
import { getInventario, createInventario, updateInventario, deleteInventario, getInventario1, deleteInventario1, updateInventario1} from "../controllers/inventario.controller.js";

const router = Router()

router.get('/inventario',getInventario)
router.get('/inventario/:id',getInventario1)
router.post('/inventario',createInventario)
router.put('/inventario',updateInventario)
router.patch('/inventario/:id',updateInventario1)
router.delete('/inventario',deleteInventario)
router.delete('/inventario/:id',deleteInventario1)

export default router