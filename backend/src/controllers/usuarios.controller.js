import { pool } from '../db.js'

export const getUsuarios = async (req,res) => {
    try{
    const [rows] = await pool.query('SELECT * FROM usuarios')
    res.json(rows)
    } catch (error) {
        return res.status(500).json({
            message:'algo va mal'
        })
    }
}


export const getUsuario = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM usuarios WHERE id_usuarios = ?', [req.params.id])
    
        if(rows.length <= 0) 
        return res.status(404).json({
            message: 'Usuario no encontrado'
        })
        res.json(rows[0])
    }   catch (error) {
        return res.status(500).json({
            message: "Algo va mal"
        });
    }
};

export const createUsuarios = async (req,res) => {
    try {
        const {nombre, apellido, correo, contraseña} = req.body
        const [rows] = await pool.query('INSERT INTO usuarios (nombre, apellido, correo, contraseña) VALUES (?, ?, ?, ?)',[nombre, apellido, correo, contraseña]
        );
        res.send({
            id: rows.insertId,
            nombre,
            apellido,
            correo,
            contraseña 
        });
    }   catch (error) {
        return res.status(500).json({
            message: "Algo va mal",
        });
    }
};

export const updateUsuarios =(req,res) => res.send('Actualizando Usuarios')

export const updateUsuario = async (req,res) => {
    try{
        const {id} = req.params
        const {nombre, apellido, correo, contraseña} = req.body

        const [result] = await pool.query('UPDATE employee SET nombre = IFNULL (?, nombre), apellido = IFNULL (?, apellido), correo = IFNULL (?, correo), contraseña = IFNULL (?, contraseña) WHERE id_usuarios = ?', [nombre, apellido, correo, contraseña]
        );

        if(result.affectedRows === 0) 
        return res.status(404).json({
        message:'Empleados no encontrado',
        });
    
        const [rows] = await pool.query('SELECT * FROM usuarios WHERE id_usuarios = ?', [id,
        ]);

        res.json(rows[0]);
    }   catch (error) {
        return res.status(500). json({
            message: "Algo va mal"
        });
    }
};

export const deleteUsuarios =(req,res) =>  res.send('Eliminando usuarios')

export const deleteUsuario = async (req, res) => {
    try {
        const [result]  = await pool.query('DELETE FROM usuarios WHERE id_usuario = ?', [req.params.id,
        ]);
    
        if(result.affectedRows <= 0) 
        return res.status(404).json({
            message: 'usuario no encontrado'
        });
        res.sendStatus(204);
    }   catch(error) {
        return res.status(500).json({
            message: "Algo va mal",
        });
    }
};