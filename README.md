# Site de Receitas

## Status: Em desenvolvimento

### Resumo
Este é um software em desenvolvimento para gerenciar receitas. Através deste aplicativo, os usuários poderão criar e armazenar suas próprias receitas. Além disso, será possível obter sugestões de receitas usando a inteligência artificial Gemini.

### Configuração da Chave de API
Para utilizar a API do Google AI Studio, é necessário configurar uma chave de API válida. Siga as instruções abaixo para obter sua chave de API:

1. Acesse a [https://console.cloud.google.com/](https://console.cloud.google.com/).
2. Crie um novo projeto ou selecione um projeto existente.
3. Ative a API de Processamento de Linguagem Natural (NLP) no painel de controle do Google Cloud.
4. Crie uma chave de API para a API do Google AI Studio.
5. Cole a chave de API no arquivo de configuração do projeto ou defina-a como uma variável de ambiente.

### Como executar a API

1. Instale o ambiente virtual:
    ```
    pip install virtualenv
    ```

2. Crie um ambiente virtual:
    ```
    python -m venv venv
    ```

3. Ative o ambiente virtual (Windows):
    ```
    .\venv\Scripts\activate
    ```

   Ative o ambiente virtual (Linux ou macOS):
    ```
    source venv/bin/activate
    ```

4. Instale as dependências do projeto:
    ```
    pip install -r requirements.txt
    ```

5. Execute a aplicação utilizando Uvicorn:
    ```
    uvicorn main:app --reload
    ```

Agora, a API estará sendo executada e você poderá acessá-la através do endereço local fornecido pelo Uvicorn.

### Contato
Para mais informações sobre o projeto, entre em contato comigo, através do email pedroschroeder06@gmail.com
