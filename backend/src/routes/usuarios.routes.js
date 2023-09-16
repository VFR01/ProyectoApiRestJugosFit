import { Router } from "express";
import { getUsuarios, createUsuarios, updateUsuarios, deleteUsuarios, getUsuario, deleteUsuario, updateUsuario} from "../controllers/usuarios.controller.js";


const router = Router()

router.get('/usuarios',getUsuarios)
router.get('/usuarios/:id',getUsuario)
router.post('/usuarios',createUsuarios)
router.put('/usuarios',updateUsuarios)
router.patch('/usuarios/:id',updateUsuario)
router.delete('/usuarios',deleteUsuarios)
router.delete('/usuarios/:id',deleteUsuario)

export default router