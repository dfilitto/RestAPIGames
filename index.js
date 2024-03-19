const axios = require('axios');

// URL da API REST que fornece os dados dos clientes
const apiUrl = 'http://localhost:3000/users';

async function obterClientes() {
    try {
        const resposta = await axios.get(apiUrl);
        return resposta.data; // Retorna os dados dos clientes
    } catch (erro) {
        console.error('Erro ao obter clientes:', erro.message);
        return []; // Retorna uma matriz vazia em caso de erro
    }
}

async function exibirClientes() {
    console.log('Obtendo dados dos clientes...\n');
    
    const clientes = await obterClientes();
    
    if (clientes.length > 0) {
        console.log('Lista de Clientes:');
        clientes.forEach(users => {
            console.log(`ID: ${users.id}, Nome: ${users.name}, Email: ${users.email}`);
        });
    } else {
        console.log('Nenhum cliente encontrado.');
    }
}

exibirClientes();