// Não alterar este código, a menos que haja uma boa justificativa.
const enviarEmail = (addressee, subject, body) => {

  if (!addressee) {
    return {
      status: "Error",
      message: "Um destinatário precisa ser fornecido ao enviar um e-mail.",
    };
  }

  if (!subject) {
    return {
      status: "Error",
      message:
        "O campo de assunto não deveria estar vazio ao enviar um e-mail.",
    };
  }

  if (!body) {
    return {
      status: "Error",
      message: "O corpo da mensagem precisa ser fornecido ao enviar um e-mail.",
    };
  }

  console.log(
    `
        De: news@carstore.com
        Para: ${addressee}
        Assunto: ${subject}
        
        ${body}
        
        CarStore - Aqui você encontra o seu carro novo
      `
  );

  return { status: "Sucess", message: "E-mail enviado com sucesso!" };
};

module.exports = enviarEmail;

// // const enviarEmail = require("./envia-email")

// const clientes = [
//   {email: 'joao.otavia@email.com', nome:"João", status: 'ATIVO' },
//   {email: 'maria.lucia@email.com', nome:"Maria", status: 'ATIVO' },
//   {email: 'roberto.nunes@email.com', nome:"Roberto", status: 'INATIVO' },
//   {email: 'ana.julia@email.com', nome:"ANa", status: 'INATIVO' }
// ]

// const carros = [
//   {modelo: 'Gol', ano:'2015', valor:'40000'},
//   {modelo: 'Civic', ano:'2017', valor:'95000'},
//   {modelo: 'Onix', ano:'2015', valor:'350000'},
//   {modelo: 'Corsa', ano:'2004', valor:'10000'},
//   {modelo: 'Strada', ano:'2005', valor:'8500'},
// ]

// for (const cliente of clientes) {
//   if (cliente.status === 'ATIVO') {
//     for (const carro of carros) {
//       console.log(enviarEmail(
//         cliente.email,
//         "Promoções de hoje",
//         `${cliente.nome}, hoje temos ${carro.modelo} ${carro.ano} na promoção! Apenas R$${carro.valor}`)
//         )
//     }
//   } else {
//     if (cliente.status !== 'ATIVO') {          
//       console.log(`E-mails que não receberam e-mail: ${cliente.email}`)
//         }
//       }
//     }

