# Agendamento de salas

## Projeto back-end em nodeJs de gerenciamento de salas.

### Comandos para criar o Banco de dados

#drop database `gerenciamentodesalas`;
create database `gerenciamentodesalas`;
use `gerenciamentodesalas`;

CREATE TABLE `curso` (
  `id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `curso` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

INSERT INTO `curso` (`id`, `curso`) VALUES
(1, 'NodeJs');


CREATE TABLE `professor` (
  `cpf` varchar(11) NOT NULL UNIQUE PRIMARY KEY,
  `professor` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL UNIQUE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

INSERT INTO `professor` (`cpf`, `professor`, `email`) VALUES
('11122299930', 'Prof. Girafales', 'girafales@gmail.com');


CREATE TABLE `usuario` (
  `cpf` varchar(11) NOT NULL UNIQUE PRIMARY KEY,
  `nome` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL UNIQUE,
  `senhaHash` varchar(100) NOT NULL,
  `roles` ENUM('usuario','moderador','admin') DEFAULT 'usuario'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;


INSERT INTO `usuario` (`cpf`, `nome`, `email`, `senhaHash`, `roles`) VALUES
('88812399920', 'Chaves', 'chaves@gmail.com', '$2b$12$5qAuoxHGxsJq.fn7w76KT.5XMUqIlJ9dv5LIPs6MljX/68wolazGa', 'admin'),
('88812399921', 'Jaiminho', 'jaiminho@gmail.com', '$2b$12$5qAuoxHGxsJq.fn7w76KT.5XMUqIlJ9dv5LIPs6MljX/68wolazGa', 'usuario'),
('88812399922', 'Godines', 'godines@gmail.com', '$2b$12$5qAuoxHGxsJq.fn7w76KT.5XMUqIlJ9dv5LIPs6MljX/68wolazGa', 'usuario'),
('88812399923', 'Dn.forinda', 'dn.forinda@gmail.com', '$2b$12$5qAuoxHGxsJq.fn7w76KT.5XMUqIlJ9dv5LIPs6MljX/68wolazGa', 'usuario'),
('88812399924', 'Dn. Clotiude', 'bruxado71@gmail.com', '$2b$12$5qAuoxHGxsJq.fn7w76KT.5XMUqIlJ9dv5LIPs6MljX/68wolazGa', 'usuario'),
('88812399925', 'Seu Madruga', 'seumadruga@gmail.com', '$2b$12$5qAuoxHGxsJq.fn7w76KT.5XMUqIlJ9dv5LIPs6MljX/68wolazGa', 'usuario'),
('88812399926', 'Seu barriga', 'seubarriga@gmail.com', '$2b$12$5qAuoxHGxsJq.fn7w76KT.5XMUqIlJ9dv5LIPs6MljX/68wolazGa', 'usuario'),
('88812399927', 'Chapolin Colorado', 'chapolin_colorado@gmail.com', '$2b$12$5qAuoxHGxsJq.fn7w76KT.5XMUqIlJ9dv5LIPs6MljX/68wolazGa', 'admin'),
('88812399928', 'Dn. Neves', 'dn_neves@gmail.com', '$2b$12$5qAuoxHGxsJq.fn7w76KT.5XMUqIlJ9dv5LIPs6MljX/68wolazGa', 'usuario'),
('88812399929', 'Pops', 'pops@gmail.com', '$2b$12$5qAuoxHGxsJq.fn7w76KT.5XMUqIlJ9dv5LIPs6MljX/68wolazGa', 'usuario');


CREATE TABLE `cargo` (
`id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
`cargo` varchar(200) NOT NULL
);

CREATE TABLE `sala` (
`id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
`sala` varchar(45) NOT NULL
);

CREATE TABLE `andar` (
`id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
`andar` varchar(45) NOT NULL
);

CREATE TABLE `bloco` (
`id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
`bloco` varchar(45) NOT NULL
);

CREATE TABLE `turno` (
`id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
`turno` ENUM('Manhã','Tarde','Noite') DEFAULT 'Manhã'
);

CREATE TABLE `status` (
`id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
`status` ENUM('Livre','Reservada') DEFAULT 'Livre'
);

CREATE TABLE `agendamento` (
  `id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `nome_Prof` varchar(11) NOT NULL,
  `cursoId` int(11) NOT NULL,
  `data` DATE NOT NULL,
  `salaId` int(11) NOT NULL,
  `andarId` int(11) NOT NULL,
  `blocoId` int(11) NOT NULL,
  `turnoId` int(11) NOT NULL,
  `statusId` int(11) NOT NULL
  /* `turno` TIME NOT NULL */
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
