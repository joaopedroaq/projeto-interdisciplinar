// Mock de dados simulando o retorno de uma query do banco de dados MySQL

const databaseContratos = [
    {
        id: 1,
        servico: "Consultoria em Marketing",
        valor: "R$ 2.500,00",
        periodo: "Jan/2026 - Jul/2026",
        status: "Ativo"
    },
    {
        id: 2,
        servico: "Marketing Digital",
        valor: "R$ 2.000,00",
        periodo: "Fev/2026 - Ago/2026",
        status: "Pendente"
    }
];


// Função responsável por mapear os dados do array e injetar no HTML

const renderizarTabela = () => {
    const lista = document.getElementById('lista-contratos');
    const contador = document.getElementById('total-contratos');
    
    // Atualiza o contador do card baseado no tamanho do array
    contador.innerText = databaseContratos.length;

    // Converte o array de objetos em linhas de tabela HTML
    lista.innerHTML = databaseContratos.map(contrato => `
        <tr>
            <td><strong>${contrato.servico}</strong></td>
            <td>${contrato.valor}</td>
            <td>${contrato.periodo}</td>
            <td>
                <span class="status ${contrato.status === 'Ativo' ? 'status-ativo' : 'status-pendente'}">
                    ${contrato.status}
                </span>
            </td>
            <td>
                <button class="btn-view" onclick="verContrato(${contrato.id})">Acessar PDF</button>
            </td>
        </tr>
    `).join('');
};

// Função simulando a chamada de um documento específico por ID
 
const verContrato = (id) => {
    alert(`Solicitando contrato ID: ${id} ao servidor...`);
};

// Executa a função principal assim que o documento estiver pronto
document.addEventListener('DOMContentLoaded', renderizarTabela);