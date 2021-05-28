create database cube_thinking;
use cube_thinking;


-- CRIAÇÃO DE TABELAS WORKBENCH
create table usuario_chris(
	id_usuario int primary key auto_increment,
    nome varchar(45),
    email varchar(50),
	senha varchar(15)
) auto_increment = 100;

create table cubos_chris(
	id_cubo int primary key auto_increment,
    descricao varchar(50)
);

create table historico_chris(
	id_historico int primary key auto_increment,
    fk_usuario int not null,
    fk_cubo int not null,
    tempo time,
    sorteio varchar(30),
    foreign key(fk_usuario) references usuario_chris(id_usuario),
    foreign key(fk_cubo) references cubos_chris(id_cubo)
)auto_increment = 1;

select id_historico, usuario_chris.nome, tempo, cubos_chris.descricao as cubo
from historico_chris join cubos_chris on fk_cubo = id_cubo
join usuario_chris on fk_usuario = id_usuario
where fk_usuario = 100 order by id_historico desc limit 5;



-- CRIAÇÃO DE DADOS SQL SERVER
create table usuario_chris(
	id_usuario INT IDENTITY,
    nome varchar(45),
    email varchar(50),
	senha varchar(15)
);

create table cubos_chris(
	id_cubo int identity,
    descricao varchar(50)
);

create table historico_chris(
	id_historico int identity,
    fk_usuario int not null,
    fk_cubo int not null,
    tempo time,
    sorteio varchar(30),
    foreign key(fk_usuario) references usuario_chris(id_usuario),
    foreign key(fk_cubo) references cubos_chris(id_cubo)
);


-- INSERÇÃO DE DADOS
insert into cubos_chris values
(1, '2x2x2'),
(2, '3x3x3'),
(3, '4x4x4'),
(4, 'Pyramix'),
(5, 'Megamix'),
(6, 'Outro');