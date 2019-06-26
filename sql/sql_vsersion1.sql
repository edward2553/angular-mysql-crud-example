
USE ng_games_db;

CREATE TABLE games(
    id int(11) not null auto_increment primary key,
    title varchar(180),
    description varchar(255),
    image varchar(200),
    created_at timestamp default current_timestamp
);
select * from games;
describe games;


CREATE TABLE tarjetas(
    id int(11) not null auto_increment primary key,
    id_persona int(11) not null,
    title varchar(180),
    description varchar(255),
    precio double,
    image varchar(200),
    created_at timestamp default current_timestamp
);

CREATE TABLE usuario(
    id int(11) not null auto_increment primary key,
    nombre varchar(100) not null,
    apellido varchar(100) not null,
    nombre_usuario varchar(100) not null,
    contraseña varchar(100) not null,
    correo varchar(100),
    telefono varchar(100),
    profesion varchar(100),
    nivel_academico varchar(100),
    image varchar(200),
    created_at timestamp default current_timestamp
);


CREATE TABLE tarjetas_guardadas(
    id int(11) not null auto_increment primary key,
	id_persona int(11) not null,
    id_tarjeta int(11) not null
);
