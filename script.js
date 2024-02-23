// Importação do script JS de enviarEmail
const enviarEmail = require("./envia-email");

// Array de lista de clientes
const clientes = [
  { email: "joao.otavia@email.com", nome: "João", status: "ATIVO" },
  { email: "maria.lucia@email.com", nome: "Maria", status: "ATIVO" },
  { email: "roberto.nunes@email.com", nome: "Roberto", status: "INATIVO" },
  { email: "ana.julia@email.com", nome: "Ana", status: "INATIVO" },
];

// Array de lista de carros
const carros = [
  { modelo: "Gol", ano: "2015", valor: "40000" },
  { modelo: "Civic", ano: "2017", valor: "95000" },
  { modelo: "Onix", ano: "2015", valor: "350000" },
  { modelo: "Corsa", ano: "2004", valor: "10000" },
  { modelo: "Strada", ano: "2005", valor: "8500" },
];

// Função que verifica se é segunda-feira. Usei a função date para definir a variável 'dia' e usei o getDay para conferir em qual dia da semana estamos. Terminei com um ternário que verifica se o dia da semana é segunda-feira apenas
function isSegunda() {
  let dia = new Date();
  let diaDaSemana = dia.getDay();
  return diaDaSemana === 1 ? true : false;
  // return true
}

// Função de criação do corpo do email. Primeiro criei um "header" da mensagem e depois rodei um forEach para verificar dinamicamente as informações da lista de carros. O resultado, do forEach é um incremento à mmensagem, que depois é retornado como resultado da função
const criarCorpoEmail = (cliente, carros) => {
  let mensagem = `Bom dia, ${cliente.nome}! Confira nossa lista de veículos:\n`;
  carros.forEach((carro) => {
    mensagem += `- ${carro.modelo} ${carro.ano} por R$${carro.valor}\n`;
  });
  return mensagem;
};

// Criação de uma string vazia que receberá as informações dos usuários que não contam com o status 'Ativo' no banco de dados
let naoRecebeu = "";

// Caso seja segunda-feira, se iniciará a rotina de verificação se o cliente está apto ou não para receber o email. Caso esteja marcado como ATIVO e seja segunda-feira, defini uma variável que recebe a função de criação do corpo do email para passar ela como parâmetro e faço um console.log na função. Se nào for segunda-feira retorna uma mensagem de alerta.
if (isSegunda()) {
  clientes.forEach((cliente) => {
    if (cliente.status === "ATIVO") {
      let corpoEmail = criarCorpoEmail(cliente, carros);
      console.log(enviarEmail(cliente.email, "Carros da semana", corpoEmail))
    } else if (cliente.status !== "ATIVO") {
      naoRecebeu += `${cliente.nome}: ${cliente.email} \n`;
    }
  });
} else {
  console.log("Hoje não é segunda-feira! Nenhum cliente receberá e-mail")
}


// É emitida uma mensagem que lista os usuários que não receberam o email
console.log(`Clientes que não receberam e-mail: \n ${naoRecebeu}`);