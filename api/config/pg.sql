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
