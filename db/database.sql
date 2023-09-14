CREATE DATABASE IF NOT EXISTS jugosFit;
USE jugosFit;

CREATE TABLE usuarios (
    id_usuarios INT PRIMARY KEY,
    nombre VARCHAR(200),
    apellido VARCHAR (200),
    correo VARCHAR (200),
    contraseña VARCHAR (200)
);

CREATE TABLE pedidos (
    id_pedidos INT PRIMARY KEY,
    producto_id INT,
    cantidad INT,
    id_usuarios INT,
    vlr_unitario DECIMAL (10, 2),
    vlr_total DECIMAL (10, 2),
    fecha_hora_pedido DATE,
    fecha_hora_entrega DATE,
    FOREIGN KEY (id_usuarios) REFERENCES usuarios(id_usuarios)
);

CREATE TABLE productos (
    producto_id INT PRIMARY KEY,
    nombre VARCHAR (200),
    descripcion VARCHAR (250),
    precio_unitario DECIMAL (10, 2),
    stock INT
);

CREATE TABLE inventario (
    id_inventario INT PRIMARY KEY,
    producto_id INT,
    ifecha_horain DATE,
    ifecha_horaout DATE,
    stock INT,
    cantidad_salida INT,
    FOREIGN KEY (producto_id) REFERENCES productos (producto_id)
);

INSERT INTO usuarios (id_usuarios,
nombre, apellido, correo, contraseña)

VALUES 
    (1032432358, 'Diego', 'Ordoñez', 'diorzu28@gmail.com', '123456'),
    (1045678524, 'Andres', 'Suarez', 'andressuarez@gmail.com', '654321'),
    (1050468952, 'Camila', 'Roa', 'camilaroa@gmail.com', '789456'),
    (80887247, 'Diana', 'Fierro', 'dianafierro@gmail.com', '456123'),
    (51712622, 'Claudia', 'Nuñez', 'claudianuñez@gmail.com', '159263');

INSERT INTO pedidos (id_pedidos,producto_id, cantidad, id_usuario, vlr_unitario, vlr_total, fecha_hora_pedido, fecha_hora_entrega)

VALUES 
    ( 1, 111, 5, 6000.00, 30000.00, 2023-08-10 9:00:00, 2023-08-10 10:00:00),
    ( 2, 222, 2, 6000.00, 12000.00, 2023-05-08 6:00:00, 2023-08-10 6:15:00),
    ( 3, 333, 10, 6000.00, 60000.00, 2023-01-12 12:00:00, 2023-08-10 13:00:00),
    ( 4, 444, 6, 6000.00, 36000.00, 2023-07-15 13:00:00, 2023-08-10 14:00:00),
    ( 5, 555, 12, 6000.00, 72000.00, 2023-01-28 7:00:00, 2023-08-10 7:30:00);

INSERT INTO productos (producto_id, nombre,
descripcion, precio_unitario,stock)

VALUES 
    ( 111, 'jgmorado', '', 6000.00 , 80 ),
    ( 222, 'jgverde', '', 6000.00, 100),
    ( 333, 'jgpro', '', 6000.00, 100),
    ( 444, 'jgamarillo', '', 6000.00, 80),
    ( 555, 'jgrojo', '', 6000.00, 70);

INSERT INTO inventario (id_inventario, Producto_id, ifecha_horain, ifecha_horaout, stock, cantidad_salida)

VALUES 
    ( 1, 111,2023-06-5 12:00:00, 2023-08-10 9:00:00, 80, 1),
    ( 2, 222, 2023-06-5 12:00:00, 2023-05-08 6:00:00, 100, 12),
    ( 3, 333, 2023-06-5 12:00:00, 2023-01-12 12:00:00, 100, 3),
    ( 4, 444, 2023-06-5 12:00:00, 2023-07-15 13:00:00, 80, 10),
    ( 5, 555, 2023-06-5 12:00:00, 2023-01-28 7:00:00, 70, 12);