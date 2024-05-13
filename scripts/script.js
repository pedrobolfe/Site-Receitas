import google.generativeai as genai


// trecho para as estrelas de avaliação
const ratingInputs = document.querySelectorAll('.rating input');

ratingInputs.forEach(input => {
    input.addEventListener('click', () => {
        document.querySelector('.rating-value').textContent = input.value + " estrela(s)";
    });
});

//configurar o gemini
const apiKey = '';
const genai = { configure: () => {} }; // Simulação do genai.configure para JavaScript
genai.configure({ api_key: apiKey });

// Configuração do modelo Gemini
const generationConfig = {
    temperature: 1,
    top_p: 1,
    top_k: 0,
    max_output_tokens: 2048
};

const safetySettings = [
    { category: "HARM_CATEGORY_HARASSMENT", threshold: "BLOCK_MEDIUM_AND_ABOVE" },
    { category: "HARM_CATEGORY_HATE_SPEECH", threshold: "BLOCK_MEDIUM_AND_ABOVE" },
    { category: "HARM_CATEGORY_SEXUALLY_EXPLICIT", threshold: "BLOCK_MEDIUM_AND_ABOVE" },
    { category: "HARM_CATEGORY_DANGEROUS_CONTENT", threshold: "BLOCK_MEDIUM_AND_ABOVE" }
];

// Iniciar uma conversa com o modelo Gemini
let convo = { send_message: () => {} }; // Simulação do método send_message para JavaScript
convo = model.start_chat(history=[]);

convo.send_message(`
quando eu pedir uma receita eu quero que retorne as informações como ingredientes, modo de preparo observações nesse formato html
<div class="card">
  <h2 class="titulo"></h2> nome da receita aqui
  <button class="favoritar">Favoritar</button>
  <button class="remover">Remover</button>
  <h3>Ingredientes:</h3>
  <ul class="lista-ingredientes">
    <li></li> // ingredientes aqui        
  </ul>
  <h3>Modo de Preparo:</h3>
  <ol class="preparacao">
    <li></li> // modo de preparo aqui
  </ol>
  <h3>Avalie está receita:</h3>
  <div class="rating">
    <input type="radio" id="star5" name="rating" value="5" /><label for="star5" title="Excelente"></label>
    <input type="radio" id="star4" name="rating" value="4" /><label for="star4" title="Muito bom"></label>
    <input type="radio" id="star3" name="rating" value="3" /><label for="star3" title="Bom"></label>
    <input type="radio" id="star2" name="rating" value="2" /><label for="star2" title="Regular"></label>
    <input type="radio" id="star1" name="rating" value="1" /><label for="star1" title="Ruim"></label>
  </div>
  <span class="rating-value"></span>
  <h3>Comentários:</h3>
  <div class="comentarios-wrapper">
    <textarea id="comentarios" class="comments" placeholder="Deixe seu comentário"></textarea>
    <button class="enviar-comentario">
      <i class="fas fa-arrow-alt-circle-right"></i>
    </button>
  </div>
</div>
`)


// Adicionar evento de clique para adicionar uma nova receita
const addButton = document.getElementById('bt-add-receita');
addButton.addEventListener('click', function() {
    // Obter o valor do input de texto
    const nomeReceita = document.getElementById('receita-escolhida').value;

    // Verificar se o nome da receita não está vazio
    if (nomeReceita.trim() !== '') {
        // Criar um novo elemento div para o card da receita
        const novoCard = document.createElement('div');
        novoCard.classList.add('card');

        // Enviar a mensagem para o modelo Gemini
        convo.send_message(nomeReceita);

        // Definir o conteúdo do card com a última mensagem do modelo
        novoCard.innerHTML = convo.last.text;

        // Adicionar o novo card à seção de receitas
        const receitasSection = document.querySelector('.receitas-user');
        receitasSection.appendChild(novoCard);

        // Limpar o input de texto
        document.getElementById('receita-escolhida').value = '';
    } else {
        alert('Por favor, digite o nome da receita.');
    }
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////
import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = "";
const genAI = new GoogleGenerativeAI(API_KEY);

const model = getGenerativeModel({ model: "gemini-pro" });
chat = model.startChat({
	generationConfig: {
        	maxOutputTokens: 100,a
	},
});

chat.sendMessageStream("continue a sequencia 1, 2, 3...20")


const prompt = "fale a palavra ola"
const result = model.generateContent(prompt);
const response = result.response;
const text = response.text();
console.log(text);


run();
