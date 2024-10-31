#drop database `gerenciamentodesalas`;
create database `gerenciamentodesalas`;
use `gerenciamentodesalas`;

CREATE TABLE `curso` (
  `id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `curso` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

INSERT INTO `curso` (`curso`) VALUES 
('NodeJs'),
('PHP'),
('Java'),
('Javascript');

CREATE TABLE `professor` (
  `cpf` varchar(11) NOT NULL UNIQUE PRIMARY KEY,
  `professor` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL UNIQUE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

INSERT INTO `professor` (`cpf`, `professor`, `email`) VALUES 
('11122299930', 'Prof. Girafales', 'girafales@gmail.com'),
('22211199940', 'Prof. Luiz Sena', 'sena@gmail.com'),
('33311199950', 'Prof. Valney', 'valney@gmail.com');

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
INSERT INTO `cargo` (`cargo`) VALUES 
("Coordenador"),
("Inspetor"),
("Monitor");


CREATE TABLE `sala` (
`id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
`sala` varchar(45) NOT NULL
);
INSERT INTO `sala` (`sala`) VALUES 
("100"),
("102"),
("103"),
("104"),
("105");


CREATE TABLE `andar` (
`id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
`andar` varchar(45) NOT NULL
);
INSERT INTO `andar` (`andar`) VALUES 
("1°"),
("2°"),
("3°"),
("4°"),
("5°"),
("6°");


CREATE TABLE `bloco` (
`id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
`bloco` varchar(45) NOT NULL
);
INSERT INTO `bloco` (`bloco`) VALUES
("A"),
("B"),
("C"),
("D");

CREATE TABLE `turno` (
`id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
`turno` ENUM('Manhã','Tarde','Noite') DEFAULT 'Manhã'
);
INSERT INTO `turno` (`turno`) VALUES 
("Manhã"),
("Tarde"),
("Noite");


CREATE TABLE `status` (
`id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
`status` ENUM('Livre','Reservada') DEFAULT 'Livre'
);

INSERT INTO `status` (`status`) VALUES 
("Livre"),
("Reservada");

CREATE TABLE `agendamento` (
  `id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `nome_Prof` int(11) NOT NULL,
  `cursoId` int(11) NOT NULL,
  `data` DATE NOT NULL,
  `salaId` int(11) NOT NULL,
  `andarId` int(11) NOT NULL,
  `blocoId` int(11) NOT NULL,
  `turnoId` int(11) NOT NULL,
  `statusId` int(11) NOT NULL
);

INSERT INTO `agendamento` (`nome_Prof`, `cursoId`, `data`, `salaId`, `andarId`, `blocoId`, `turnoId`, `statusId`) VALUES
(3, 2, '2024-11-27', 3, 2, 2, 1, 2),
(2, 3, '2024-11-18', 1, 4, 1, 3, 2),
(1, 4, '2024-12-15', 2, 3, 3, 2, 2);

select * from agendamento;

/*
("Luiz Sena", "PHP", "22/11/2024", "104", "3°", "B", "Noite", "Reservada"),
("Prof. Girafales", "Javascript", "18/11/2024", "102", "5°", "C", "Manhã", "Reservada"),
("Prof. Valney", "Javas", "15/12/2024", "105", "2°", "A", "Tarde", "Reservada");
*/

