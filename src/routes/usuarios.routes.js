import { Router } from "express";
import { getusuarios, createusuarios, updateusuarios, deleteusuarios, getUsuario, deleteUsuario, updateUsuario} from "../controllers/usuarios.controller.js";

const router = Router()

router.get('/usuarios',getusuarios)
router.get('/usuarios/:id',getUsuario)
router.post('/usuarios',createusuarios)
router.put('/usuarios',updateusuarios)
router.patch('/usuarios/:id',updateUsuario)
router.delete('/usuarios',deleteusuarios)
router.delete('/usuarios/:id',deleteUsuario)

export default router