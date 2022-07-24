import readlineSync from 'readline-sync';

let lista = [];

(function main() {
  let finish = false;
  while (!finish) {
    console.log('===========================================================');
    console.log('1 - Cadastrar vacina');
    console.log('2 - Listar aplicações');
    console.log('3 - Consultar por CPF');
    console.log('4 - Sair');
    finish = openMenu();
  }
})();

function openMenu() {
  const option = readlineSync.question('Digite a opção desejada: ');
  switch (option) {
    case '1':
      cadastrarVacina();
      break;
    case '2':
      listarAplicaoes();
      break;
    case '3':
      consultarPorCPF();
      break;
    case '4':
      return true;
    default:
      console.log('Opção inválida');
      break;
  }
  return false;
}

function cadastrarVacina() {
  const nome = readlineSync.question('Digite o nome do paciente: ');
  const cpf = readlineSync.question('Digite o CPF do paciente: ');
  const vacina = readlineSync.question('Digite a vacina: ');
  const data = readlineSync.question('Digite a data de aplicação: ');
  const lote = readlineSync.question('Digite o Numero do Lote: ');
  const resultado = {
    codigo: lista.length + 1,
    nome: nome,
    cpf: cpf,
    vacina: vacina,
    data: data,
    lote: lote,
  };
  lista.push(resultado);
}

function listarAplicaoes() {
  if (lista.length > 0) {
    console.log('==============================================');
    console.log('Código | Nome | CPF | Vacina | Data | Lote');
    console.log('==============================================');
    lista.forEach(item => {
      console.log(
        `${item.codigo} | ${item.nome} | ${item.cpf} | ${item.vacina} | ${item.data} | ${item.lote}`,
      );
    });
    console.log('===========================================================');
  } else {
    console.log('Não há pessoas cadastradas');
  }
}

function consultarPorCPF() {
  const cpf = readlineSync.question('Digite o CPF do paciente: ');
  const resultado = lista.filter(item => item.cpf === cpf);
  console.log('===========================================================');
  console.log('Código | Nome | CPF | Vacina | Data | Lote');
  console.log('===========================================================');
  resultado.forEach(item => {
    console.log(
      `${item.codigo} | ${item.nome} | ${item.cpf} | ${item.vacina} | ${item.data} | ${item.lote}`,
    );
  });
}
