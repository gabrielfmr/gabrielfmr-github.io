<!DOCTYPE html> 
<html lang="pt-br">
<head>
	<meta charset="UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<title>Formulário de algo</title>
	<link rel="stylesheet" href="style.css">
    <script src="scripts.js" defer></script>
</head>
<body>


<?php

if ($_SERVER["REQUEST_METHOD"] === "POST"){


    if (empty($_POST["nome"]) || !preg_match("/[A-Za-z0-9]+/",$_POST['nome']) ){
        echo '<div class="error" id="error">Nome de usuário inválido ou não preenchido.</div>';
    }

    }
    if(empty($_POST["pwd"]) || !preg_match("/(?=(.*[0-9]))((?=.*[A-Za-z0-9])(?=.*[A-Z])(?=.*[a-z]))^.{8,}$/",$_POST['pwd'])){
        echo '<div class="error" id="error">Senha não atende aos requerimentos ou não foi preenchida.</div>';
    }
    if( $_POST["pwd"] != $_POST["pwd2"] ){
        echo '<div class="error" id="error">As senhas digitadas não são iguais</div>';
    }

    function validateCPF($cpf) {

        $cpf = sprintf('%011s', preg_replace('{\D}', '', $cpf));
        
        if ((strlen($cpf) != 11)
                || ($cpf == '00000000000')
                || ($cpf == '99999999999')) {
            return false;
        }
       {
        for ($t = 8; $t < 10;) {
            for ($d = 0, $p = 2, $c = $t; $c >= 0; $c--, $p++) {
                $d += $cpf[$c] * $p;
            }
            if ($cpf[++$t] != ($d = ((10 * $d) % 11) % 10)) {
                return false;
            }
        }
        return true;
    }

    if (empty($_POST["cpf"]) || !validateCPF($_POST["cpf"]) ){
        echo '<div class="error" id="error">CPF inválido ou não preenchido.</div>';
    }

}

?>

<form action="#" method="post" id="formcad">
    <h1>Formulario</h1>
    <label for="uid">Usuário de algo:</label> 	            <input type="text" name="nome" id="nome"  placeholder="Digite seu Nome" />
    <label for="ip1">Endereço IP de algo:</label>           <input type="text" name="end" id="end" placeholder="Digite o seu Endereço" />
    <label for="pwd">Senha:</label>	                        <input type="password" name="pwd" id="pwd"   placeholder="Digite sua Senha" />       
    <label for="pwd2">Confirmar senha:</label>              <input type="password" name="pwd2" id="pwd2" placeholder="Confirme sua Senha" />     
    <label for="cpf">CPF:</label>                           <input type="text" name="cpf" id="cpf" placeholder="Digite seu CPF" />

    <label for="clk3">Semana de algo:</label>               <input type="week" name="semana" id="semana" />
    <label for="clk4">Horário de algo:</label>              <input type="time" name="hr" id="hr"/>

    <label for="rang">Faixa de algo:</label>                <input type="range" name="faixa" id="faixa" min="0" max="100" />
    <label for="textbox">Texto de algo:</label>             <textarea name="textbox" id="textbox" placeholder="Digite seu Texto"></textarea>
        
    <label>Seletor de rádio de algo</label>
        <label for="gen">Opção 1                                <input type="radio" name="gen" value="op1" id="op1"/></label>
        <label for="gen">Opção 2                                <input type="radio" name="gen" value="op2" id="op2"/></label>  
        <label for="gen">Opção 3                                <input type="radio" name="gen" value="op3" id="op3"/></label> 
    
    <label>Seletor de lista suspensa de algo:</label>
    <select name="options" id="sel" >
        <option value=""   class="select" id="defaultsel" disabled selected>Selecione uma opção</option>
        <option value="a" class="select" >Opção A</option>
        <option value="b" class="select" >Opção B</option>
        <option value="c" class="select" >Opção C</option>
    </select>

    <label for="lic">Recuso algo:</label>                   <input type="checkbox" name="rec" id="rec"/>

    <input type="reset" value="❌ Limpar"/>                 <input type="submit" value="✔️ Enviar"/>
</form>
	
</body>

</html>



