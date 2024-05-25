const headers = getAuthHeaders();

async function depositar(numeroConta) {
  const valor = parseInt(document.getElementById("inputDepositar").value);
  await axios.post("/api/user/deposit", { headers, value: valor });
}


// class Conta {
//   constructor() {
//     this.saldo = 0;
//     this.numeroConta = Math.floor(Math.random() * 10000) + 1;
//   }

//   depositar(valor) {
//     if (isNaN(valor)) {
//       console.log("Não é um valor válido!");
//       alert("Não é um valor válido!");
//       agencia.atualizaTabela();
//     } else {
//       this.saldo += valor;
//       console.log(
//         `Depósito de R$${valor} realizado. Novo saldo: R$${this.saldo.toFixed(
//           2
//         )}`
//       );
//       alert(
//         `A conta de número ${
//           this.numeroConta
//         } foi creditada com um depósito de R$${valor}, resultando em um novo saldo de R$${this.saldo.toFixed(
//           2
//         )}`
//       );

//       agencia.atualizaTabela();
//     }
//   }

//   sacar(valor) {
//     if (valor > this.saldo) {
//       console.log("Saldo insuficiente.");
//       alert("Saldo insuficiente.");
//     } else if (isNaN(valor)) {
//       console.log("Digite um valor para sacar.");
//       alert("Digite um valor para sacar.");
//     } else {
//       this.saldo -= valor;
//       console.log(
//         `Saque de R$${valor} realizado. Novo saldo: R$${this.saldo.toFixed(2)}`
//       );
//       alert(
//         `Saque de R$${valor} realizado. Novo saldo: R$${this.saldo.toFixed(2)}`
//       );
//       agencia.atualizaTabela();
//     }
//   }

//   transferir(destino, valor) {
//     if (!destino || isNaN(valor) || valor <= 0) {
//       console.log("Transferência inválida.");
//       alert("Transferência inválida.");
//     } else if (valor > this.saldo) {
//       console.log("Saldo insuficiente para transferência.");
//       alert("Saldo insuficiente para transferência.");
//     } else {
//       this.saldo -= valor;
//       destino.depositar(valor);
//       console.log(
//         `Transferência de R$${valor} realizada. Novo saldo: R$${this.saldo.toFixed(
//           2
//         )}`
//       );
//       alert(
//         `Transferência de R$${valor} realizada. Novo saldo: R$${this.saldo.toFixed(
//           2
//         )}`
//       );
//       agencia.atualizaTabela();
//     }
//   }
// }

// class AgenciaBancaria {
//   constructor() {
//     this.contas = [];
//     const conta = new Conta();
//     console.log(conta);

//     this.contas.push(conta);
//   }

//   criarConta() {
//     const conta = new Conta();
//     console.log(conta);

//     this.contas.push(conta);
//     this.atualizaTabela();
//   }

//   atualizaTabela() {
//     this.contas.forEach((conta) => {
//       const numConta = document.getElementById("numeroConta");
//       const saldo = document.getElementById("saldo");
//       const acoesConta = document.getElementById("acoesConta");
//       const name = sessionStorage.getItem("name");

//       numConta.innerHTML = `Numero da Conta: ${conta.numeroConta}`;
//       saldo.innerHTML = `R$ ${conta.saldo.toFixed(2)}`;
//       acoesConta.innerHTML = `

//       <p id="mensagem">
//       <b class="nome-verde">Bem vindo, ${name}</b>. Aqui no ZaBank você pode <b>Depositar</b> e <b>Sacar</b>
//       quantias. Além disso, você pode <b>Transferir</b> para qualquer pessoa,
//       onde e quando quiser!
//     </p>

//       <div class="inputButton"><input id="inputDepositar"
// 					type="number"
// 					placeholder="R$0.00"
// 				/>
// 			<button onclick="agencia.depositar(${conta.numeroConta})">Depositar</button></div>

//       <div class="inputButton"><input id="inputSacar"
// 					type="number"
// 					placeholder="R$0.00"
// 				/>
// 			<button onclick="agencia.sacar(${conta.numeroConta})">Sacar</button></div>

//       <div class="inputButton"><input id="inputTrasnferir"
// 					type="number"
// 					placeholder="R$0.00"
// 				/>
// 			<button onclick="agencia.transferir(${conta.numeroConta})">Transferir</button></div>
      
//       `;
//     });
//   }

 
//   sacar(numeroConta) {
//     const valor = parseFloat(document.getElementById("inputSacar").value);
//     const conta = this.encontrarConta(numeroConta);
//     if (conta) {
//       conta.sacar(valor);
//     }
//   }

//   transferir(numeroConta) {
//     const contaOrigem = this.encontrarConta(numeroConta);
//     if (contaOrigem) {
//       const numeroDestinatario = parseInt(
//         prompt("Digite o número da conta destinatária:")
//       );
//       const valor = parseFloat(
//         document.getElementById("inputTransferir").value
//       );
//       const contaDestino = this.encontrarConta(numeroDestinatario);
//       if (contaDestino) {
//         contaOrigem.transferir(contaDestino, valor);
//       } else {
//         alert("Conta ou Valor inválido!");
//       }
//     }
//   }

//   encontrarConta(numeroConta) {
//     return this.contas.find((conta) => conta.numeroConta === numeroConta);
//   }
// }

const agencia = new AgenciaBancaria();
agencia.atualizaTabela();
