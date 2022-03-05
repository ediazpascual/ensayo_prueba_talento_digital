const fs = require("fs");
const customers = require("./customers.json");

const calculateDiscount = (amount, discount) => {
  return (amount * discount) / 100;
};

const main = () => {
  const args = process.argv.slice(2);
  const [name, amount, discount] = args;

  const isCustomer = customers.includes(name);
  const finalPrice = calculateDiscount(amount, discount);

  let response;

  if (isCustomer === true) {
    response = `Cliente: ${name}. Su compra es de ${amount} pesos. Porcentaje de descuento ${discount}% da un total de: $${finalPrice}`;
  } else {
    response = `Estimado/a ${name}. Actualmente usted no es cliente en la tienda, favor registrarse para poder realizar compras`;
  }

  fs.writeFileSync(`${name}.txt`, response, "utf8");
  const file = fs.readFileSync(`./${name}.txt`, "utf8");
  return file;
};

console.log(main());
