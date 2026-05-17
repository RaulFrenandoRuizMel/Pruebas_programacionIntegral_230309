-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: fdb1028.awardspace.net
-- Tiempo de generación: 17-05-2026 a las 10:13:43
-- Versión del servidor: 8.0.32
-- Versión de PHP: 8.1.34

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `4554128_kinder`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `administradores`
--

CREATE TABLE `administradores` (
  `id` int NOT NULL,
  `nombre` varchar(60) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish2_ci NOT NULL COMMENT 'campo de puro texto sin caracteres numericos, para mayor efectividad puede ser sin caracteres especiales',
  `correo` varchar(60) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish2_ci NOT NULL COMMENT 'lo mejor sera defirnilo con la noenclatura de al+matricula+@uacj.mx',
  `contraseña` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish2_ci NOT NULL COMMENT 'debe de ser la misma contrase;a que la cuenta',
  `celular` varchar(15) COLLATE utf8mb3_spanish2_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_spanish2_ci;

--
-- Volcado de datos para la tabla `administradores`
--

INSERT INTO `administradores` (`id`, `nombre`, `correo`, `contraseña`, `celular`) VALUES
(1, 'roberto', 'roberto@gmail.com', '$2y$10$XiKuIkmV31Qw8qSs/HRmh.c2c4L6dX2bCRumu9YX7gfHLrG3MZB4O', '6561234567'),
(0, 'VENANCIO', 'VENANCIO@GMAIL.COM', '$2y$10$BaYVJGdtfWUHt8hTYXaLIudSpCFQhEJFnGrCTBfI7PvDQ7Ap6nEtq', '6561234567');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `alumnos`
--

CREATE TABLE `alumnos` (
  `id_alu` int NOT NULL,
  `id_grupo` int NOT NULL,
  `nombre_alu` varchar(60) COLLATE utf8mb4_spanish_ci NOT NULL,
  `apellidos_alu` varchar(60) COLLATE utf8mb4_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

--
-- Volcado de datos para la tabla `alumnos`
--

INSERT INTO `alumnos` (`id_alu`, `id_grupo`, `nombre_alu`, `apellidos_alu`) VALUES
(7, 10, 'Juanito Jose', 'Alcachofa Perez'),
(8, 12, 'Juanito Jose', 'Alcachofa Perez'),
(9, 10, 'Antonio', 'Rodriguez '),
(10, 10, 'Antonio', 'Rodriguez '),
(11, 12, 'Pepe', 'Lopez'),
(12, 10, 'Aldo', 'Lopez');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `campus`
--

CREATE TABLE `campus` (
  `id` int NOT NULL,
  `nombre` varchar(60) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish2_ci NOT NULL COMMENT 'nombre de campus que ofrece los convenios',
  `nivel` varchar(60) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish2_ci NOT NULL COMMENT 'licenciatura, maestria, etc'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_spanish2_ci;

--
-- Volcado de datos para la tabla `campus`
--

INSERT INTO `campus` (`id`, `nombre`, `nivel`) VALUES
(1, 'IADA (Instituto de Arquitectura, Diseño y Arte)', 'Licenciatura'),
(2, ' IIT (Instituto de Ingeniería y Tecnología)', 'Licenciatura'),
(3, ' ICSA (Instituto de Ciencias Sociales y Administración)', 'Licenciatura'),
(4, 'ICB (Instituto de Ciencias Biomédicas)', 'Licenciatura');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `convenio`
--

CREATE TABLE `convenio` (
  `id` int NOT NULL,
  `nombre` varchar(60) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish2_ci NOT NULL COMMENT 'nombre del convenio para internacionalizacion',
  `pais` varchar(30) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish2_ci NOT NULL COMMENT 'pais que ofrece el convenio para la residencia',
  `campus_especifico` int NOT NULL COMMENT 'campus eclusivo del convenio'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_spanish2_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `grupo`
--

CREATE TABLE `grupo` (
  `id_grupo` int NOT NULL,
  `id_usu` int NOT NULL,
  `grupo_grp` varchar(10) COLLATE utf8mb4_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

--
-- Volcado de datos para la tabla `grupo`
--

INSERT INTO `grupo` (`id_grupo`, `id_usu`, `grupo_grp`) VALUES
(10, 32, 'Grupo 1'),
(12, 31, 'Grupo2'),
(13, 32, 'Ghhg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `mensajes_de_contacto`
--

CREATE TABLE `mensajes_de_contacto` (
  `id` int NOT NULL,
  `nombre` varchar(60) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish2_ci NOT NULL COMMENT 'nombre del usuario que realiza la consulta',
  `correo` varchar(60) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish2_ci NOT NULL COMMENT 'correo del usuario que realiza la consulta',
  `matrricula` int NOT NULL COMMENT 'matricula del usuario que realiza la consulta',
  `creditos` int NOT NULL COMMENT 'cantidad de creditos del usuario que realiza la consulta (maximo depende de la licenciatura)',
  `programa_intercambio` varchar(60) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish_ci NOT NULL COMMENT 'programa por el que esta pidiendo informacion',
  `campus` varchar(60) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish_ci NOT NULL COMMENT 'campus al que pertenece el usuario que realiza la consulta',
  `mensaje` text CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish_ci NOT NULL COMMENT 'mensaje con las dudas del usuario'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_spanish_ci;

--
-- Volcado de datos para la tabla `mensajes_de_contacto`
--

INSERT INTO `mensajes_de_contacto` (`id`, `nombre`, `correo`, `matrricula`, `creditos`, `programa_intercambio`, `campus`, `mensaje`) VALUES
(3, 'roberto', 'JOSE@GMAIL.COM', 232323, 232, 'Programa Universidad De Paris', 'IADA', 'ssdfdsf'),
(4, 'roberto', 'roberto@gmail.com', 232323, 232, 'Programa Universidad De Florencia', 'IIT', 'Hola, Buenas Noches!!'),
(5, 'roberto', 'roberto@gmail.com', 232323, 322, 'Programa Universidad De Paris', 'IADA', 'Hola, Buenas tardes');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `personal`
--

CREATE TABLE `personal` (
  `id` int NOT NULL,
  `id_usu` int NOT NULL,
  `maestro` varchar(60) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish_ci NOT NULL,
  `correo` varchar(60) COLLATE utf8mb3_spanish_ci NOT NULL,
  `celular` varchar(15) COLLATE utf8mb3_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_spanish_ci;

--
-- Volcado de datos para la tabla `personal`
--

INSERT INTO `personal` (`id`, `id_usu`, `maestro`, `correo`, `celular`) VALUES
(24, 32, 'Leonardo', 'LEO@GMAIL.COM', '6561234567'),
(25, 31, 'RAUL FERNANDO', 'raul@gmail.com', '6561234567'),
(26, 35, 'Pepe Julian Grillo', 'PEPE@gmail.com', '6561234567');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id_usu` int NOT NULL,
  `usuario_usu` varchar(32) COLLATE utf8mb3_spanish_ci NOT NULL,
  `password_usu` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish_ci NOT NULL,
  `rol` varchar(32) COLLATE utf8mb3_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_spanish_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id_usu`, `usuario_usu`, `password_usu`, `rol`) VALUES
(31, 'Raul.Ruiz', '$2y$10$SrCWl./vmhT/AAMHB4NoLOy4l4s6jLOTACj/Kg.h4YegHbPNW0xNm', 'Admin'),
(32, 'Leo.Saenz', '$2y$10$IstQYfOsQCK7d0TsGZ4Sfui27bX09efE4nq5TdqIFZteQesCjJmY6', 'Usuario'),
(35, 'Pepe.Grillo', '$2y$10$HW2YEkMP0GEyskPOUpGX/uWLvSSUm2OgnE8KZ7NNnEoQ.GFTO5DiS', 'Docente'),
(36, 'Lopez.Carrillo', '$2y$10$iQt6sI4TznhEgpdMAcmFwed3vn9zK9x3xrTmYA/ptwR6VmWKTd2kK', 'Docente'),
(37, 'Jose.Lopez', '$2y$10$6xj2v3VRUd.1ZvZc3NFWi.jK1IoP8wwKVfQeW09nYQdn0Jeq71Ima', 'Docente'),
(38, 'Admin', '$2y$10$jOMNjCSfsoUs6r6i02lpS.UMyTILsMFaSlj.3l8ex0jQR6ymmmxu6', 'Admin'),
(39, 'UsuarioX', '$2y$10$XVKD1RyPW1JVq0CiuHnVSuKdPGwmmrMkwQ6IT12v/MsXsTk8EsVVy', 'Usuario'),
(40, 'SritaP', '$2y$10$WLwOx3c8UsIyCj9ONtiTm.B9i1jHyE4Cuav8UtSOSd6tna30roAH2', 'Docente');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios_personalizados`
--

CREATE TABLE `usuarios_personalizados` (
  `id` int NOT NULL,
  `nombre` varchar(60) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish2_ci NOT NULL COMMENT 'nombre del usuario que realiza la consulta',
  `correo` varchar(60) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish2_ci NOT NULL COMMENT 'correo del usuario que realiza la consulta (nomneclatura: al+matricula+@uacj.mx)',
  `matrricula` varchar(15) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish2_ci NOT NULL COMMENT 'matricula del usuario que realiza la consulta',
  `contraseña` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish2_ci NOT NULL COMMENT 'contraseña del usuario que realiza la consulta',
  `fecha_de_ingreso` date NOT NULL COMMENT 'fecha en la que inicio sus estudios el usuario',
  `creditos_cursados` int NOT NULL COMMENT 'creditos totales del usuario al momento que realiza la consulta',
  `campus` int NOT NULL COMMENT 'campus al que pertenece el usuario',
  `nivel_de_ingles` varchar(15) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish2_ci NOT NULL COMMENT 'nivel de ingles del usuario que realiza la consulta',
  `segundo_idioma` varchar(15) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish2_ci NOT NULL COMMENT 'Si el usuario tiene certificacion de un segundo idioma para casos en los que sea requerido uno'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_spanish2_ci;

--
-- Volcado de datos para la tabla `usuarios_personalizados`
--

INSERT INTO `usuarios_personalizados` (`id`, `nombre`, `correo`, `matrricula`, `contraseña`, `fecha_de_ingreso`, `creditos_cursados`, `campus`, `nivel_de_ingles`, `segundo_idioma`) VALUES
(1, 'Jorge Negrete', 'jorge_negre@uacj.mx', '203519', '1234', '2020-03-18', 200, 1, 'C-1', 'Ninguno'),
(2, 'roberto', 'nuevoUsuario@gmail.com', '203265', '$2y$10$Iin8sHoyHxvlkxFk1dQz7uMpB3G2ne7NFJPktkMjhJ59DpItIfZBq', '2026-05-22', 0, 4, 'B-1', 'Ninguno'),
(3, 'visitante', 'visitante@gmail.com', '000000', '$2y$10$shdbXjR16m1kBXNHGOfVreVqUewuU3UpS2n6M0KAggStZu5qix5Au', '2026-05-07', 400, 1, 'C-2', 'Ninguno'),
(4, 'VENANCIO CASTAÑON', 'al123456@alumnos.uacj.mx', '123456', '$2y$10$7CIANIgMTGGmrPE6NJEhcuER.NQbixD6y/kaoROAgLhkQzfDdkvV2', '2025-06-30', 10, 1, 'A-2', 'Francés'),
(5, 'roberto', 'roberto@gmail.com', '232323', '$2y$10$HAvOPAES6siHIYirkJjF2eCg0z5SvZc14EUSLaPazd2VOelwwGL12', '2026-05-07', 288, 2, 'B-1', 'Alemán');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `alumnos`
--
ALTER TABLE `alumnos`
  ADD PRIMARY KEY (`id_alu`),
  ADD KEY `id_grupo` (`id_grupo`);

--
-- Indices de la tabla `campus`
--
ALTER TABLE `campus`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `convenio`
--
ALTER TABLE `convenio`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `grupo`
--
ALTER TABLE `grupo`
  ADD PRIMARY KEY (`id_grupo`),
  ADD KEY `id_usu` (`id_usu`);

--
-- Indices de la tabla `mensajes_de_contacto`
--
ALTER TABLE `mensajes_de_contacto`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `personal`
--
ALTER TABLE `personal`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_usu` (`id_usu`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id_usu`);

--
-- Indices de la tabla `usuarios_personalizados`
--
ALTER TABLE `usuarios_personalizados`
  ADD PRIMARY KEY (`id`),
  ADD KEY `campus` (`campus`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `alumnos`
--
ALTER TABLE `alumnos`
  MODIFY `id_alu` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT de la tabla `campus`
--
ALTER TABLE `campus`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `convenio`
--
ALTER TABLE `convenio`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `grupo`
--
ALTER TABLE `grupo`
  MODIFY `id_grupo` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT de la tabla `mensajes_de_contacto`
--
ALTER TABLE `mensajes_de_contacto`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `personal`
--
ALTER TABLE `personal`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id_usu` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=41;

--
-- AUTO_INCREMENT de la tabla `usuarios_personalizados`
--
ALTER TABLE `usuarios_personalizados`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `alumnos`
--
ALTER TABLE `alumnos`
  ADD CONSTRAINT `alumnos_ibfk_1` FOREIGN KEY (`id_grupo`) REFERENCES `grupo` (`id_grupo`) ON UPDATE CASCADE;

--
-- Filtros para la tabla `grupo`
--
ALTER TABLE `grupo`
  ADD CONSTRAINT `grupo_ibfk_1` FOREIGN KEY (`id_usu`) REFERENCES `usuarios` (`id_usu`) ON UPDATE CASCADE;

--
-- Filtros para la tabla `personal`
--
ALTER TABLE `personal`
  ADD CONSTRAINT `personal_ibfk_1` FOREIGN KEY (`id_usu`) REFERENCES `usuarios` (`id_usu`) ON UPDATE CASCADE;

--
-- Filtros para la tabla `usuarios_personalizados`
--
ALTER TABLE `usuarios_personalizados`
  ADD CONSTRAINT `usuarios_personalizados_ibfk_1` FOREIGN KEY (`campus`) REFERENCES `campus` (`id`) ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
