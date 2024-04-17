function vogalConsoante (){


    let letra = prompt("Digite uma letra:");

    if (letra.length !== 1) {
        alert("Por favor, digite só uma letra.");
        return;
    }

    letra = letra.toLowerCase();
   
    if (/[aeiou]/.test(letra)) {
        alert("A letra  é uma vogal.");
    } else if (/[bcdfghjklmnpqrstvwxyz]/.test(letra)) {
        alert("A letra  é uma consoante.");
    } else {
        alert("O caractere  não é uma letra.");
    }
}
