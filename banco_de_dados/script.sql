create database cube_thinking;
use cube_thinking;

-- CRIAÇÃO DE TABELAS
create table usuario(
	id_usuario int primary key auto_increment,
    nome varchar(45),
    email varchar(50),
	senha varchar(15)
) auto_increment = 100;

create table cubos(
	id_cubo int primary key auto_increment,
    descricao varchar(50)
);

create table historico(
	id_historico int primary key auto_increment,
    fk_usuario int not null,
    fk_cubo int not null,
    tempo time,
    sorteio varchar(30),
    foreign key(fk_usuario) references usuario(id_usuario),
    foreign key(fk_cubo) references cubos(id_cubo)
)auto_increment = 1;