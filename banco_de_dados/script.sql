create database cube_thinking;
use cube_thinking;

-- CRIAÇÃO DE TABELAS
create table usuarios(
	id_usuario int primary key auto_increment,
    nome varchar(45),
    email varchar(50),
	senha varchar(15)
) auto_increment = 100;

create table historico(
	id_historico int primary key auto_increment,
    fk_usuario int not null,
    tempo time,
    sorteio varchar(30),
    foreign key(fk_usuario) references usuarios(id_usuario)
)auto_increment = 1;