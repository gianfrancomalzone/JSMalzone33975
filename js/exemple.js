alert("Bienvenido a una calculadora de gastos.");

let income = parseInt(prompt("Total de ingresos disponibles: "));
let expense = 0;
let total = 0;

function dec(income, expense) {
  return (total = income - expense);
}

for (let i = 0; i < 1; i--) {
  if (i == 0) {
    if (isNaN(income)) {
      console.log("Ingresa un monto válido.");
      break;
    } else {
      console.log("Tienes " + income + " pesos disponibles.");
    }
  }
  expense = parseInt(prompt("Ingresa un gasto: "));
  if (isNaN(expense) || expense > income) {
    console.log("Ingresa un monto válido.");
    break;
  } else {
    console.log("Gastas " + expense + " pesos");
  }
  dec(income, expense);
  console.log("Te quedan " + total + " pesos disponibles.");
  if (total >= 1) {
    income = income - expense;
    dec(income, expense);
    console.log("Total " + total);
    console.log("Te quedan " + income + ".");
    continue;
  } else if (total < 1) console.log("No tienes dinero disponible.");
  break;
}
