
function balancoFinanceiroAnual() {
    let ganhoAnual = 0;
    let gastoAnual = 0;

    for (let i = 1; i <= 12; i++) {
        let ganhoMes = parseFloat(prompt("Digite o ganho bruto do mês " + i + ":"));
        let gastoMes = parseFloat(prompt("Digite os gastos do mês " + i + ":"));

        if (!isNaN(ganhoMes) && !isNaN(gastoMes)) {
            ganhoAnual += ganhoMes;
            gastoAnual += gastoMes;
        } else {
            alert("Por favor, digite valores numéricos válidos.");
            return;
        }
    }

    let saldoFinanceiro = ganhoAnual - gastoAnual;

    alert("Ganho bruto anual: " + ganhoAnual);
    alert("Gastos anuais: " + gastoAnual);
    alert("Saldo financeiro: " + saldoFinanceiro);

    if (saldoFinanceiro > 0) {
        alert("A empresa teve lucro.");
    } else if (saldoFinanceiro < 0) {
        alert("A empresa teve prejuízo.");
    } else {
        alert("A empresa não teve lucro nem prejuízo.");
    }
}



