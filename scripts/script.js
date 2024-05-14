// Função para consultar a API FastAPI e obter a receita
async function fetchRecipe(inReceita) {
    const url = `http://127.0.0.1:8000/rota?receita=${inReceita}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Erro na solicitação: ${response.statusText}`);
        }

        const data = await response.text(); // Supondo que a API retorna um texto HTML
        console.log(data);

        // Exibe a receita em um elemento HTML
        const cardContainer = document.querySelector('.receitas-user'); // Seleciona o container das receitas
        cardContainer.insertAdjacentHTML('beforeend', data); // Insere a nova receita no final do container

    } catch (error) {
        console.error('Erro ao buscar a receita:', error);
    }
}



// Exemplo de uso da função
document.getElementById('btAddReceita').addEventListener('click', () => {
    const receita = document.getElementById('inReceita').value;
    fetchRecipe(receita);
});