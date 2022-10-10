const nome = document.getElementById ('nome');
const end = document.getElementById ('end');
const pwd = document.getElementById ('pwd');
const pwd2 = document.getElementById ('pwd2');
const cpf = document.getElementById ('cpf');
const semana = document.getElementById ('semana');
const faixa = document.getElementById('faixa');
const textbox = document.getElementById ('textbox');
const gen = document.getElementById ('gen');
const sel = document.getElementById ('sel');
const rec = document.getElementById ('rec');

function validate(item){
    
    item.setCustomValidity('');    
    item.checkValidity();                      

    if(item == cpf){
        let numcpf = cpf.value.replace(/[^0-9]/g, "");
        if(validateCPF(numcpf)) {
            item.setCustomValidity('');
        }else{
            item.setCustomValidity('CPF inválido');
        }
    }

    if (item == pwd2){
        if (item.value === pwd.value){
            item.setCustomValidity('');   
        }else{
            item.setCustomValidity('Dá um jeito nessa senha, não tá batendo com a anterior.');
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

cpf.addEventListener('input', function(){validate(cpf)});
//pwd.addEventListener('input', function(){validate(pwd)});
pwd2.addEventListener('input',function(){validate(pwd2)});
cpf.addEventListener    ('input', maskCPF);


pwd.addEventListener('invalid', function(){
    if(pwd.value === ''){
        pwd.setCustomValidity('Crie uma senha.');
    }else{
        pwd.setCustomValidity('Sua senha deve conter no mínimo 8 caracteres, no máximo 12 caracteres, pelos menos uma letra maiúscula, uma letra minúscula, um número e um caractere especial (!@#$%^&*_=+-).');
    }
});




