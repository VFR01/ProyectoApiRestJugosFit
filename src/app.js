import express from 'express'
import inventarioRoutes from './routes/inventario.routes.js'
import pedidosRoutes from './routes/pedidos.routes.js'
import productosRoutes from './routes/productos.routes.js'
import usuariosRoutes from './routes/usuarios.routes.js'


const app = express()

app.use(express.json())


app.use('/api',inventarioRoutes)
app.use('/api',pedidosRoutes)
app.use('/api',productosRoutes)
app.use('/api',usuariosRoutes)



app.use((req, res, next) => {
    res.status(404).json({
        message: 'EndPoint No Encontrado'
    })
})

export default app