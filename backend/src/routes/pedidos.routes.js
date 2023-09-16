import { Router } from "express";
import { getPedidos, createPedidos, updatePedidos, deletePedidos, getPedido, deletePedido, updatePedido} from "../controllers/pedidos.controller.js";

const router = Router()

router.get('/pedidos',getPedidos)
router.get('/pedidos/:id',getPedido)
router.post('/pedidos',createPedidos)
router.put('/pedidos',updatePedidos)
router.patch('/pedidos/:id',updatePedido)
router.delete('/pedidos',deletePedidos)
router.delete('/pedidos/:id',deletePedido)

export default router