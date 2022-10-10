<?php

		require_once("../model/conexao.php");
	?>
	
	<!DOCTYPE html>
<html>
<head>
	<tittle></tittle>
	<link rel="stylesheet" type="text/css" href="../css/style.css">
	</head>
	<body>
		<form method="GET">
            <input type="search" name="pesq">
            <input type="submit" name="">
        </form>
		<div id="conteiner">
				
	

	<?php
	if(isset($_GET['pesq']) && $_GET['pesq'] != '')
    	$consulta = "SELECT nome_cliente, CPF_cliente,  RG_cliente, foto_cliente  FROM  cliente where nome_cliente like '%$_GET[pesq]%'"; 
	else  
		$consulta = "SELECT	nome_cliente, CPF_cliente, RG_cliente, foto_cliente FROM cliente;";

		
	$consulta = mysqli_query($conexao, $consulta);

	?>
	

	<?php

	while ($row_produto = mysqli_fetch_assoc($consulta)){
	?>

<div style="width: 20%; border: 1px solid">
		<p><?php echo $row_produto['nome_cliente']; ?></p>
		<p><?php echo $row_produto['CPF_cliente']; ?></p>
		<p><?php echo $row_produto['RG_cliente']; ?></p>
		<img src="../img/<?php echo $row_produto['foto_cliente']; ?>" alt="">
		
	</div>
	
	<?php
	}
	/*
	echo "<tr>";
	echo "<p>".$row_produto['id_pedido']."</p>";
	echo "<p>".$row_produto['id_cliente']."</p>";
	echo "<p>".$row_produto['data_venda']. "</p>";
	echo "<p>".$row_produto['valor_venda']."</p>";
	echo "</tr>";
	*/
	?>

	
<nav>
	<a href="livraria.php">Cadastrar cliente</a>

</nav>

</div>
	</body>