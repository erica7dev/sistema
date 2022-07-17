function aplicarDesconto(valor: number, desconto: number) {
  if (desconto > valor) return 0;
  return valor - desconto;
}

module.exports = { aplicarDesconto };
console.log(aplicarDesconto(10, 5));
