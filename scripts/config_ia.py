import google.generativeai as genai

# Defina sua chave API
chave_api = ''
genai.configure(api_key=chave_api)

# Configurações de geração
generation_config = {
    "temperature": 1,
    "top_p": 1,
    "top_k": 0,
    "max_output_tokens": 2048,
}

# Configurações de segurança
safety_settings = [
    {
        "category": "HARM_CATEGORY_HARASSMENT",
        "threshold": "BLOCK_MEDIUM_AND_ABOVE"
    },
    {
        "category": "HARM_CATEGORY_HATE_SPEECH",
        "threshold": "BLOCK_MEDIUM_AND_ABOVE"
    },
    {
        "category": "HARM_CATEGORY_SEXUALLY_EXPLICIT",
        "threshold": "BLOCK_MEDIUM_AND_ABOVE"
    },
    {
        "category": "HARM_CATEGORY_DANGEROUS_CONTENT",
        "threshold": "BLOCK_MEDIUM_AND_ABOVE"
    },
]

# Inicializa o modelo
model = genai.GenerativeModel(
    model_name="gemini-1.0-pro",
    generation_config=generation_config,
    safety_settings=safety_settings
)

# Inicializa a conversa
convo = model.start_chat(history=[])

# Envia uma mensagem inicial para a conversa
convo.send_message("""quando eu pedir uma receita eu quero que retorne as informações como ingredientes, modo de preparo observações nesse formato html, sem "``"
    <div class="card">
    <h2 class="titulo"></h2>
    <input type="button" class="favoritar" value="Favoritar">
    <input type="button" class="remover" value="Remover">

    <h3>Ingredientes:</h3>
    <ul class="lista-ingredientes">
        <li>
            <input type="checkbox" id="ingrediente1">
            <label for="ingrediente1"></label>
        </li>
    </ul>
    
    <h3>Modo de Preparo:</h3>
    <ul class="lista-preparo">
        <li></li>
    </ul>
    
    <h3>Avalie esta receita:</h3>
    <div class="estrelas">
        <input type="radio" id="star5-2" name="rating2" value="5" /><label for="star5-2" title="Excelente"></label>
        <input type="radio" id="star4-2" name="rating2" value="4" /><label for="star4-2" title="Muito bom"></label>
        <input type="radio" id="star3-2" name="rating2" value="3" /><label for="star3-2" title="Bom"></label>
        <input type="radio" id="star2-2" name="rating2" value="2" /><label for="star2-2" title="Regular"></label>
        <input type="radio" id="star1-2" name="rating2" value="1" /><label for="star1-2" title="Ruim"></label>
    </div>
    <span class="estrela-valor"></span>
</div>
""")
