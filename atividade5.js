function parImpar() {
    let numero = parseInt(prompt('Digite um número inteiro:'));

    if (numero % 2 === 0) {
        numero++; 
        alert("O número  era par. Transformando em ímpar: " + numero);
    } else {
        numero--;
        alert("O número  era ímpar. Transformando em par: " + numero);
    }
}