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
        const [rows] = await pool.query('SELECT * FROM inventario WHERE id = ?', [req.params.id])
    
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

export const createInventario = async (req,res) => {
    try {
        const {name, salary} = req.body
        const [rows] = await pool.query('INSERT INTO inventario (name, salary) VALUES (?, ?)',[name, salary]
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

export const updateInventario =(req,res) => res.send('Actualizando Inventario')

export const updateInventario1 = async (req,res) => {
    try{
        const {id} = req.params
        const {name, salary} = req.body

        const [result] = await pool.query('UPDATE inventario SET name = IFNULL(?, name), salary = IFNULL (?, salary) WHERE id = ?', [name, salary, id]
        );

        if(result.affectedRows === 0) 
        return res.status(404).json({
        message:'Empleados no encontrado',
        });
    
        const [rows] = await pool.query('SELECT * FROM inventario WHERE id = ?', [id,
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
        const [result]  = await pool.query('DELETE FROM inventario WHERE id = ?', [req.params.id,
        ]);
    
        if(result.affectedRows <= 0) 
        return res.status(404).json({
            message: 'empleado no encontrado'
        });
        res.sendStatus(204);
    }   catch(error) {
        return res.status(500).json({
            message: "Algo va mal",
        });
    }
};