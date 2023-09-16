CREATE DATABASE IF NOT EXISTS jugosFit;
USE jugosFit;

CREATE TABLE usuarios (
    id_usuarios INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(200),
    apellido VARCHAR (200),
    correo VARCHAR (200),
    contraseña VARCHAR (200)
);

CREATE TABLE pedidos (
    id_pedidos INT AUTO_INCREMENT PRIMARY KEY,
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
    producto_id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR (200),
    descripcion VARCHAR (250),
    precio_unitario DECIMAL (10, 2),
    stock INT
);

CREATE TABLE inventario (
    id_inventario INT AUTO_INCREMENT PRIMARY KEY,
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
    (1, 'Diego', 'Ordoñez', 'diorzu28@gmail.com', '123456'),
    (2, 'Andres', 'Suarez', 'andressuarez@gmail.com', '654321'),
    (3, 'Camila', 'Roa', 'camilaroa@gmail.com', '789456'),
    (4, 'Diana', 'Fierro', 'dianafierro@gmail.com', '456123'),
    (5, 'Claudia', 'Nuñez', 'claudianuñez@gmail.com', '159263');

INSERT INTO pedidos (id_pedidos, producto_id, cantidad, id_usuarios, vlr_unitario, vlr_total, fecha_hora_pedido, fecha_hora_entrega)
VALUES 
    (1, 111, 5, 1, '6000.00', '30000.00', '2023-08-10 09:00:00', '2023-08-10 10:00:00'),
    (2, 222, 2, 2, '6000.00', '12000.00', '2023-05-08 06:00:00', '2023-08-10 06:15:00'),
    (3, 333, 10, 3, '6000.00', '60000.00', '2023-01-12 12:00:00', '2023-08-10 13:00:00'),
    (4, 444, 6, 4, '6000.00', '36000.00', '2023-07-15 13:00:00', '2023-08-10 14:00:00'),
    (5, 555, 12, 5, '6000.00', '72000.00', '2023-01-28 07:00:00', '2023-08-10 07:30:00');

INSERT INTO productos (producto_id, nombre,
descripcion, precio_unitario,stock)

VALUES 
    ( 1, 'jgmorado', '', 6000.00 , 80 ),
    ( 2, 'jgverde', '', 6000.00, 100),
    ( 3, 'jgpro', '', 6000.00, 100),
    ( 4, 'jgamarillo', '', 6000.00, 80),
    ( 5, 'jgrojo', '', 6000.00, 70);

INSERT INTO inventario (id_inventario, Producto_id, ifecha_horain, ifecha_horaout, stock, cantidad_salida)

VALUES 
    ( 1, 111,'2023-06-5 12:00:00', '2023-08-10 9:00:00', 80, 1),
    ( 2, 222, '2023-06-5 12:00:00', '2023-05-08 6:00:00', 100, 12),
    ( 3, 333, '2023-06-5 12:00:00', '2023-01-12 12:00:00', 100, 3),
    ( 4, 444, '2023-06-5 12:00:00', '2023-07-15 13:00:00', 80, 10),
    ( 5, 555, '2023-06-5 12:00:00', '2023-01-28 7:00:00', 70, 12);