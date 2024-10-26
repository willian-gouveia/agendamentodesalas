-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 26/10/2024 às 22:19
-- Versão do servidor: 10.4.32-MariaDB
-- Versão do PHP: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `gerenciamentodesalas`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `curso`
--

CREATE TABLE `curso` (
  `id` int(11) NOT NULL,
  `nome` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Despejando dados para a tabela `curso`
--

INSERT INTO `curso` (`id`, `nome`) VALUES
(1, 'NodeJs');

-- --------------------------------------------------------

--
-- Estrutura para tabela `professor`
--

CREATE TABLE `professor` (
  `cpf` varchar(11) NOT NULL,
  `nome` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Despejando dados para a tabela `professor`
--

INSERT INTO `professor` (`cpf`, `nome`, `email`) VALUES
('11122299930', 'Prof. Girafales', 'girafales@gmail.com');

-- --------------------------------------------------------

--
-- Estrutura para tabela `usuario`
--

CREATE TABLE `usuario` (
  `cpf` varchar(11) NOT NULL,
  `nome` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `senhaHash` varchar(100) NOT NULL,
  `roles` enum('usuario','moderador','admin') NOT NULL DEFAULT 'usuario'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Despejando dados para a tabela `usuario`
--

INSERT INTO `usuario` (`cpf`, `nome`, `email`, `senhaHash`, `roles`) VALUES
('88812399920', 'Chaves', 'chaves@gmail.com', '$2b$12$5qAuoxHGxsJq.fn7w76KT.5XMUqIlJ9dv5LIPs6MljX/68wolazGa', 'admin'),
('88812399921', 'Jaiminho', 'jaiminho@gmail.com', '$2b$12$5qAuoxHGxsJq.fn7w76KT.5XMUqIlJ9dv5LIPs6MljX/68wolazGa', 'usuario'),
('88812399922', 'Godines', 'godines@gmail.com', '$2b$12$5qAuoxHGxsJq.fn7w76KT.5XMUqIlJ9dv5LIPs6MljX/68wolazGa', 'usuario'),
('88812399923', 'Dn.forinda', 'dn.forinda@gmail.com', '$2b$12$5qAuoxHGxsJq.fn7w76KT.5XMUqIlJ9dv5LIPs6MljX/68wolazGa', 'usuario'),
('88812399924', 'Dn. Clotiude', 'bruxado71@gmail.com', '$2b$12$5qAuoxHGxsJq.fn7w76KT.5XMUqIlJ9dv5LIPs6MljX/68wolazGa', 'usuario'),
('88812399925', 'Seu Madruga', 'seumadruga@gmail.com', '$2b$12$5qAuoxHGxsJq.fn7w76KT.5XMUqIlJ9dv5LIPs6MljX/68wolazGa', 'usuario'),
('88812399926', 'Seu barriga', 'seubarriga@gmail.com', '$2b$12$5qAuoxHGxsJq.fn7w76KT.5XMUqIlJ9dv5LIPs6MljX/68wolazGa', 'usuario'),
('88812399927', 'Chapolin Colorado', 'chapolin_colorado@gmail.com', '$2b$12$5qAuoxHGxsJq.fn7w76KT.5XMUqIlJ9dv5LIPs6MljX/68wolazGa', 'usuario'),
('88812399928', 'Dn. Neves', 'dn_neves@gmail.com', '$2b$12$5qAuoxHGxsJq.fn7w76KT.5XMUqIlJ9dv5LIPs6MljX/68wolazGa', 'usuario'),
('88812399929', 'Pops', 'pops@gmail.com', '$2b$12$5qAuoxHGxsJq.fn7w76KT.5XMUqIlJ9dv5LIPs6MljX/68wolazGa', 'usuario');

--
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `curso`
--
ALTER TABLE `curso`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `professor`
--
ALTER TABLE `professor`
  ADD PRIMARY KEY (`cpf`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Índices de tabela `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`cpf`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT para tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `curso`
--
ALTER TABLE `curso`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
