const uid = document.getElementById ('uid');
const tel = document.getElementById ('tel');
const email = document.getElementById ('email');
const pwd = document.getElementById ('pwd');
const pwd2 = document.getElementById ('pwd2');
const nome = document.getElementById ('nome');
const cpf = document.getElementById ('cpf');
const nasc = document.getElementById ('nasc');
const lic = document.getElementById ('lic');

function validate(item){
    item.setCustomValidity('');     //limpa validações anteriores;
    item.checkValidity();           //reexecuta validação;    

    if(item == cpf){
        let numcpf = cpf.value.replace(/[^0-9]/g, "");
        //sinais de pontuação, deixando somente o algaritmo de 0 a 9.
        if(validateCPF(numcpf)) {
            item.setCustomValidity('');
        }else{
            item.setCustomValidity('CPF inválido');
        }
    }

    if (item == pwd2){
        if (item.value === pwd.value){
            item.setCustomValidity('');     //limpa validação;
        }else{
            item.setCustomValidity('Dá um jeito nessa senha, não tá batendo com a anterior.');
        }
    }

    if (item == nasc){
        let hoje = new Date();      //obtém data atual;
        let dnasc = new Date(nasc.value);

        let idade = hoje.getFullYear() - dnasc.getFullYear();
        let m = hoje.getMonth() - dnasc.getMonth();
        if (m < 0 || (m == 0 && hoje.getDate() < dnasc.getDate() )){
            idade--;
        }
        if (idade >= 0){
            document.getElementById('idade').value = idade + " anos";
        }else{
            document.getElementById('idade').value = idade + "Ainda não nascido.";
        }
        if (idade < 18){
            item.setCustomValidity('Você prescissa mentir sua idade.')
        }else if (idade > 130) {
            item.setCustomValidity('Você não deve exagerar ao mentir sua idade')
        }
    }
}

function validateCPF(cpf){
    var number, digits, sum, i, result, equal_digits;
    equal_digits = 1;

    if (cpf.length < 11)
        return false;

    for (i = 0; i < cpf.length - 1; i++)

        if (cpf.charAt(i) != cpf.charAt(i + 1)){
            equal_digits = 0;
            break;
        }

    if (!equal_digits){
        number = cpf.substring(0,9);
        digits = cpf.substring(9);
        sum = 0;

    for (i = 10; i > 1; i--)
        sum += number.charAt(10 - i) * i;
        result = sum % 11 < 2 ? 0 : 11 - sum % 11;
                                
    if (result != digits.charAt(0))
        return false;
        number = cpf.substring(0,10);
        sum = 0;

    for (i = 11; i > 1; i--)
        sum += number.charAt(11 - i) * i;
        result = sum % 11 < 2 ? 0 : 11 - sum % 11;

    if (result != digits.charAt(1))
        return false;
        return true;
    }else
        return false;
}

function maskCPF(){
    let strCPF = cpf.value;
    if(strCPF.length == 3 || strCPF.length == 7) cpf.value += '.';
    if(strCPF.length == 11) cpf.value += '-';
    validate(cpf);
}

function maskTEL(){
    let strTEL = tel.value;
    if(strTEL.length == 2) tel.value = '(' + tel.value + ') ';
    if(strTEL.length == 9) tel.value += '-';
    if(strTEL.length == 15 && strTEL[9] == "-"){
        tel.value = strTEL.substring(0,9)+strTEL[10]+"-"+strTEL.substring(11);
}
}

uid.addEventListener    ('input', function(){validate(uid)  });
pwd.addEventListener    ('input', function(){validate(pwd)  });
pwd2.addEventListener   ('input', function(){validate(pwd2) });
nome.addEventListener   ('input', function(){validate(nome) });
nasc.addEventListener   ('input', function(){validate(nasc) }); 

cpf.addEventListener    ('input', maskCPF);
tel.addEventListener    ('input', maskTEL);

pwd.addEventListener('invalid', function(){
    if (pwd.value === ''){
        pwd.setCustomValidity("Insira uma senha!");
    } else {
        pwd.setCustomValidity("A senha deve conter pelo menos 8 caracteres: uma letra maiúscula, uma letra minúscula e um número.")
    }
})