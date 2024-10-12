# agendamento de salas

Projeto back-end em nodeJs de gerenciamento de salas.

#Comandos para criar o Banco de dados

create database `gerenciamentodesalas`;
use `gerenciamentodesalas`;

CREATE TABLE IF NOT EXISTS `curso` (

  `id` INT(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  
  `nome` VARCHAR(200) NOT NULL
  
)ENGINE = InnoDB DEFAULT CHARACTER SET = utf8;


CREATE TABLE IF NOT EXISTS `professor` (

  `id` INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  
  `nome` VARCHAR(200) NOT NULL
  
)ENGINE = InnoDB DEFAULT CHARACTER SET = utf8;


INSERT INTO curso (nome) VALUES ("NodeJs");

INSERT INTO professor (nome) VALUES ("Miguel");

select * from curso;

select * from professor;
