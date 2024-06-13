create table tb_produto (
  codigo serial,
  desc_prod varchar(50),
  vl_unit numeric(15,2),
  qtd int,
  cod_cat int,
  primary key (codigo),
  foreign key (cod_cat) references tb_categoria(codigo)
)

create table tb_categoria (
  codigo serial,
  descricao varchar(30),
  primary key (codigo)
)

insert into tb_categoria (descricao) values (
  ('Eletrodoméstico'),
	('Informática'),
	('Telefonia'),
	('Móveis'),
	('Automotivo'),
	('Esporte'),
	('Moda'),
	('Beleza'),
	('Brinquedos'),
	('Outros')
)

create table tb_author (
  codigo serial,
  nome varchar(100) not null,
  biografia text,
  data_nascimento date,
  primary key (codigo)
);

create table tb_book (
  codigo serial,
  titulo varchar(150) not null,
  id_autor INT not null,
  data_publicacao date,
  isbn varchar(20),
  resumo text,
  primary key (codigo),
  foreign key (id_autor) references tb_author(codigo)
);
