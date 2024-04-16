function contagemRegressiva() {
    let segundos = 10; 

    const contagemInterval = setInterval(function() {
        alert(segundos);
        segundos--;

        if (segundos < 0) {
            clearInterval(contagemInterval);
            alert("Foguete lançado!");
        }
    }, 1000); 
}


