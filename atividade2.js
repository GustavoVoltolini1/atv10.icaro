function contagemRegressiva() {
    let segundos = 10; 

    const contagemInterval = setInterval(function() {
        console.log(segundos);
        segundos--;

        if (segundos < 0) {
            clearInterval(contagemInterval);
            console.log("Foguete lançado!");
        }
    }, 1000); 
}


contagemRegressiva();