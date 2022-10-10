<?php

define('host', 'localhost');
define('usuario', 'root');
define('senha', '');
define('dbname', 'livraria');

$conexao = mysqli_connect(host, usuario, senha, dbname) or die ('Não foi possivel conectar');
mysqli_set_charset($conexao,"utf8");

?>