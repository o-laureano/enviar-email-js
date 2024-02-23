const enviarEmail = require("./envia-email");

const clientes = [
  { email: "joao.otavia@email.com", nome: "João", status: "ATIVO" },
  { email: "maria.lucia@email.com", nome: "Maria", status: "ATIVO" },
  { email: "roberto.nunes@email.com", nome: "Roberto", status: "INATIVO" },
  { email: "ana.julia@email.com", nome: "Ana", status: "INATIVO" },
];

const carros = [
  { modelo: "Gol", ano: "2015", valor: "40000" },
  { modelo: "Civic", ano: "2017", valor: "95000" },
  { modelo: "Onix", ano: "2015", valor: "350000" },
  { modelo: "Corsa", ano: "2004", valor: "10000" },
  { modelo: "Strada", ano: "2005", valor: "8500" },
];

const criarCorpoEmail = (cliente, carros) => {
  let mensagem = `Bom dia, ${cliente.nome}! Confira nossa lista de veículos:\n`;
  carros.forEach((carro) => {
    mensagem += `- ${carro.modelo} ${carro.ano} por R$${carro.valor}\n`;
  });
  return mensagem;
};

let naoRecebeu = "";

clientes.forEach((cliente) => {
  if (cliente.status === "ATIVO") {
    let corpoEmail = criarCorpoEmail(cliente, carros);
    let resultado = enviarEmail(cliente.email, "Carros da semana", corpoEmail);
    console.log(resultado);
  } else if (cliente.status !== "ATIVO") {
    naoRecebeu += `${cliente.nome} e ${cliente.email} \n`;
  }
});

console.log(`E-mails que não receberam e-mail: \n ${naoRecebeu}`);