import { pool } from '../db.js'

export const getPedidos = async (req,res) => {
    try{
    throw new Error('Mi Error')
    const [rows] = await pool.query('SELECT * FROM pedidos')
    res.json(rows)
    } catch (error) {
        return res.status(500).json({
            message:'algo va mal'
        })
    }
}


export const getPedido = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM pedido WHERE id_pedidos = ?', [req.params.id])
    
        if(rows.length <= 0) 
        return res.status(404).json({
            message: 'pedido no encontrado'
        })
        res.json(rows[0])
    }   catch (error) {
        return res.status(500).json({
            message: "Algo va mal"
        });
    }
};

export const createPedidos = async (req,res) => {
    try {
        const {id_pedidos, producto_id, cantidad, id_usuarios, vlr_unitario, vlr_total, fecha_hora_pedido, fecha_hora_entrega} = req.body
        const [rows] = await pool.query('INSERT INTO pedido (id_pedidos, producto_id, cantidad, id_usuarios, vlr_unitario, vlr_total, fecha_hora_pedido, fecha_hora_entrega) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',[id_pedidos, producto_id, cantidad, id_usuarios, vlr_unitario, vlr_total, fecha_hora_pedido, fecha_hora_entrega]
        );
        res.send({
            id: rows.insertId,
            name,
            salary, 
        });
    }   catch (error) {
        return res.status(500).json({
            message: "Algo va mal",
        });
    }
};

export const updatePedidos =(req,res) => res.send('Actualizando Empleados')

export const updatePedido = async (req,res) => {
    try{
        const {id} = req.params
        const {name, salary} = req.body

        const [result] = await pool.query('UPDATE pedido SET producto_id = IFNULL (?, producto_id), cantidad = IFNULL (?, cantidad), id_usuarios = IFNULL (?, id_usuarios), vlr_unitario = IFNULL (?, vlr_unitario), vlr_total = IFNULL (?, vlr_total), fecha_hora_pedido = IFNULL (?, fecha_hora_pedido), fecha_hora_entrega = IFNULL (?, fecha_hora_entrega) WHERE id_pedidos = ?', [name, salary, id]
        );

        if(result.affectedRows === 0) 
        return res.status(404).json({
        message:'Pedido no encontrado',
        });
    
        const [rows] = await pool.query('SELECT * FROM pedido WHERE id_pedidos = ?', [id,
        ]);

        res.json(rows[0]);
    }   catch (error) {
        return res.status(500). json({
            message: "Algo va mal"
        });
    }
};

export const deletePedidos =(req,res) =>  res.send('Eliminando Empleados')

export const deletePedido = async (req, res) => {
    try {
        const [result]  = await pool.query('DELETE FROM pedido WHERE id_pedidos = ?', [req.params.id,
        ]);
    
        if(result.affectedRows <= 0) 
        return res.status(404).json({
            message: 'Pedido no encontrado'
        });
        res.sendStatus(204);
    }   catch(error) {
        return res.status(500).json({
            message: "Algo va mal",
        });
    }
};