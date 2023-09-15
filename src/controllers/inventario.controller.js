import { pool } from '../db.js'

export const getInventario = async (req,res) => {
    try{
    throw new Error('Mi Error')
    const [rows] = await pool.query('SELECT * FROM inventario')
    res.json(rows)
    } catch (error) {
        return res.status(500).json({
            message:'algo va mal'
        })
    }
}


export const getInventario1 = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM inventario WHERE id_inventario = ?', [req.params.id])
    
        if(rows.length <= 0) 
        return res.status(404).json({
            message: 'inventario no encontrado'
        })
        res.json(rows[0])
    }   catch (error) {
        return res.status(500).json({
            message: "Algo va mal"
        });
    }
};

export const createInventario = async (req,res) => {
    try {
        const {name, salary} = req.body
        const [rows] = await pool.query('INSERT INTO inventario (id_inventario, producto_id, ifecha_horain, ifecha_horaout, stock, cantidad_salida) VALUES (?, ?, ?, ?, ?, ?)',[id_inventario, producto_id, ifecha_horain, ifecha_horaout, stock, cantidad_salida ]
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

export const updateInventario =(req,res) => res.send('Actualizando inventario')

export const updateInventario1 = async (req,res) => {
    try{
        const {id} = req.params
        const {id_inventario, producto_id, ifecha_horain, ifecha_horaout, stock, cantidad_salida } = req.body

        const [result] = await pool.query('UPDATE inventario SET id_inventario = IFNULL(?, id_inventario), producto_id = IFNULL (?, producto_id), ifecha_horain = IFNULL(?, ifecha_horain), ifecha_horaout = IFNULL(?, ifecha_horaout), stock = IFNULL(?, stock), cantidad_salida = IFNULL(?, cantidad_salida) WHERE id_inventario = ?', [id_inventario, producto_id, ifecha_horain, ifecha_horaout, stock, cantidad_salida]
        );

        if(result.affectedRows === 0) 
        return res.status(404).json({
        message:'inventario no encontrado',
        });
    
        const [rows] = await pool.query('SELECT * FROM inventario WHERE id_inventario = ?', [id,
        ]);

        res.json(rows[0]);
    }   catch (error) {
        return res.status(500). json({
            message: "Algo va mal"
        });
    }
};

export const deleteInventario =(req,res) =>  res.send('Eliminando Inventario')

export const deleteInventario1 = async (req, res) => {
    try {
        const [result]  = await pool.query('DELETE FROM inventario WHERE id_inventario = ?', [req.params.id,
        ]);
    
        if(result.affectedRows <= 0) 
        return res.status(404).json({
            message: 'inventario no encontrado'
        });
        res.sendStatus(204);
    }   catch(error) {
        return res.status(500).json({
            message: "Algo va mal",
        });
    }
};