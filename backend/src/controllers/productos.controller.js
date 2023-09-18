import { pool } from '../db.js'

export const getProductos = async (req,res) => {
    try{
    const [rows] = await pool.query('SELECT * FROM productos')
    res.json(rows)
    } catch (error) {
        return res.status(500).json({
            message:'algo va mal'
        })
    }
}


export const getProducto = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM productos WHERE producto_id = ?', [req.params.id])
    
        if(rows.length <= 0) 
        return res.status(404).json({
            message: 'Empleado no encontrado'
        })
        res.json(rows[0])
    }   catch (error) {
        return res.status(500).json({
            message: "Algo va mal"
        });
    }
};

export const createProductos = async (req,res) => {
    try {
        const {nombre, descripcion, precio_unitario, stock} = req.body
        const [rows] = await pool.query('INSERT INTO productos (nombre, descripcion, precio_unitario, stock) VALUES (?, ?, ?, ?)',[nombre, descripcion, precio_unitario, stock]
        );
        res.send({
            id: rows.insertId,
            nombre,
            descripcion,
            precio_unitario,
            stock 
        });
    }   catch (error) {
        return res.status(500).json({
            message: "Algo va mal",
        });
    }
};

export const updateProductos =(req,res) => res.send('Actualizando Productos')

export const updateProducto = async (req,res) => {
    try{
        const {id} = req.params
        const {nombre, descripcion, precio_unitario, stock} = req.body

        const [result] = await pool.query('UPDATE productos SET nombre = IFNULL(?, nombre), descripcion = IFNULL (?, descripcion), precio_unitario = IFNULL(?, precio_unitario), stock = IFNULL(?, stock) WHERE producto_id = ?', [nombre, descripcion, precio_unitario, stock]
        );

        if(result.affectedRows === 0) 
        return res.status(404).json({
        message:'Productos no encontrado',
        });
    
        const [rows] = await pool.query('SELECT * FROM productos WHERE producto_id = ?', [id,
        ]);

        res.json(rows[0]);
    }   catch (error) {
        return res.status(500). json({
            message: "Algo va mal"
        });
    }
};

export const deleteProductos =(req,res) =>  res.send('Eliminando Productos')

export const deleteProducto = async (req, res) => {
    try {
        const [result]  = await pool.query('DELETE FROM productos WHERE producto_id = ?', [req.params.id,
        ]);
    
        if(result.affectedRows <= 0) 
        return res.status(404).json({
            message: 'producto no encontrado'
        });
        res.sendStatus(204);
    }   catch(error) {
        return res.status(500).json({
            message: "Algo va mal",
        });
    }
};