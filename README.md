# Site de Receitas

## Status: Em desenvolvimento

### Resumo
Este é um software em desenvolvimento para gerenciar receitas. Através deste aplicativo, os usuários poderão criar e armazenar suas próprias receitas. Além disso, será possível obter sugestões de receitas usando a inteligência artificial Gemini.

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

