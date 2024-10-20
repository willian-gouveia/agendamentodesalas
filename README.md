# Agendamento de salas

Projeto back-end em nodeJs de gerenciamento de salas.

#Comandos para criar o Banco de dados

#drop database `gerenciamentodesalas`;

#drop database `gerenciamentodesalas`;
create database `gerenciamentodesalas`;
use `gerenciamentodesalas`;

CREATE TABLE IF NOT EXISTS `usuario` (
	`cpf` VARCHAR(11) NOT NULL UNIQUE PRIMARY KEY,
    `nome` VARCHAR(100) NOT NULL,
    `email` VARCHAR(100) NOT NULL UNIQUE,
    `senhaHash` VARCHAR(100) NOT NULL
)ENGINE = InnoDB DEFAULT CHARACTER SET = utf8;

CREATE TABLE IF NOT EXISTS `curso` (
  `id` INT(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `nome` VARCHAR(200) NOT NULL
)ENGINE = InnoDB DEFAULT CHARACTER SET = utf8;

CREATE TABLE IF NOT EXISTS `professor` (
	`cpf` VARCHAR(11) NOT NULL UNIQUE PRIMARY KEY,
    `nome` VARCHAR(100) NOT NULL,
    `email` VARCHAR(100) NOT NULL UNIQUE
    
)ENGINE = InnoDB DEFAULT CHARACTER SET = utf8;

/**/
INSERT INTO usuario (cpf, nome, email, senhaHash) VALUES ("88812399920", "Chaves", "chaves@gmail.com", "1234567");
INSERT INTO curso (nome) VALUES ("NodeJs");
INSERT INTO professor (cpf, nome, email) VALUES ("11122299920", "Girafales", "girafales@gmail.com");

select * from usuario;
select * from curso;
select * from professor;