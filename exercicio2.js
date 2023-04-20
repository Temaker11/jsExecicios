/* ### Sistema de gastos familiar

crie um objeto que possuirá 2 propriedades, ambas do tipo array:
  * receitas: []
  * despesas: []

Agora, crie uma função que ira calcular o total de receitas e despesas e irá mostrar uma mensagem se a familia está com saldo positivio ou negativo, seguindo o valor do saldo

*/

let gastosFamiliar = {
  receitas: [],
  despesas: [],
};

function soma(valores) {
  let total = 0;

  for (let value of valores) {
    total += value;
  }
  return total;
}

function Saldo(receitas, despesas) {
  const saldoReceitas = soma(receitas)
  const saldoDespesas = soma(despesas)



  const total = saldoReceitas - saldoDespesas
  const result = total > 0

  if(result) {
    console.log(total + " / Saldo positivo")
  } else {
    console.log(total + " / Saldo negativo")
  }
 
}

Saldo([400, 500, 288], [600, 233, 111]);
