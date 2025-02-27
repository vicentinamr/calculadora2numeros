[21:32, 2/24/2025] Priartessbiscuit: // Solicita ao usuário que insira dois números e uma operação
const numero1 = parseFloat(prompt("Digite o primeiro número:"));
const numero2 = parseFloat(prompt("Digite o segundo número:"));
const operacao = prompt("Digite a operação desejada (+, -, , /, %, *):");

let resultado;

// Usa switch para processar a operação escolhida
switch (operacao) {
    case '+':
        resultado = numero1 + numero2;
        break;
    case '-':
        resultado = numero1 - numero2;
        break;
    case '*':
        resultado = numero1 * numero2;
        break;
    case '/':
        resultado = numero1 / numero2;
        break;
    case '%':
        resultado = numero1 % numero2;
        break;
    case '**':
        resultado = numero1 ** numero2;
        break;
    default:
        resultado = "Operação inválida!";
        break;
}

// Exibe o resultado no console
console.log("O resultado da operação é: " + resultado);
[11:06, 2/26/2025] Priartessbiscuit: // Solicita ao usuário que insira dois números e uma operação
const numero1 = parseFloat(prompt("Digite o primeiro número:"));
const numero2 = parseFloat(prompt("Digite o segundo número:"));
const operacao = prompt("Digite a operação desejada (+, -, , /, %, *):");

let resultado;

// Usa switch para processar a operação escolhida
switch (operacao) {
    case '+':
        resultado = numero1 + numero2;
        break;
    case '-':
        resultado = numero1 - numero2;
        break;
    case '*':
        resultado = numero1 * numero2;
        break;
    case '/':
        resultado = numero1 / numero2;
        break;
    case '%':
        resultado = numero1 % numero2;
        break;
    case '**':
        resultado = numero1 ** numero2;
        break;
    default:
        resultado = "Operação inválida!";
        break;
}

// Exibe o resultado no console
console.log("O resultado da operação é: " + resultado)