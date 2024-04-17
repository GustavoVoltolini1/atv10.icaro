function picoleteria() {


    const sabor = prompt("Digite o sabor:");


    let preco;


    switch(sabor) {
        case "chocolate":
            preco = 1.50;
            alert("O picolé de chocolate custa: " + preco);
            break;
        case "morango":
            preco = 2.50;
            alert("O picole de morango custa:" + preco);
            break;
        case "creme":
            preco = 2.50;
            alert("O picole de creme custa:" + preco);
            break;
        case "manga":
            preco = 3.20;
            alert("O picole de manga custa:" + preco);
            break;
        case "melancia":
            preco = 3.40;
            alert("O picole de melancia custa:" + preco);
            break;
        case "vanilla ice":
            preco = 3.00;
            alert("O picole de vanilla ice custa:" + preco);
            break;
        case "ceu azul":
            preco = 3.60;
            alert("O picole de ceu azul custa:" + preco);
            break;
        case "brownie":
            preco = 4.00;
            alert("O picole de brownie custa:" + preco);
            break;
        case "hawaiano":
            preco = 5.00;
            alert("O picole de hawaiano custa:" + preco);
            break;
       
        default:
            alert("Esse sabor nao existe")


    }
}

