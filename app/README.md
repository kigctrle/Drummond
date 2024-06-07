
# App

## Descrição

Esta aplicação web coleta informações do usuário através de um formulário com campos validados e persistência de dados. A aplicação inclui um front-end desenvolvido em React com Tailwind CSS e um back-end em Node.js com Express e Firebase.

## Estrutura do Projeto

```
app/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   ├── config.js
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   ├── App.js
│   │   ├── index.js
│ 	├── public/
│ 	│ 	├── index.html
├── package.json
├── README.md
```

## Instalação

### Backend

1. Clone o repositório:

```sh
git clone https://github.com/seu-usuario/app.git
cd my-app
```

2. Instale as dependências:

```sh
npm install
```

3. Configure o Firebase:

- Adicione o arquivo de credenciais do Firebase em `backend/path/to/your/firebase-service-account-file.json`.

4. Execute o servidor:

```sh
npm run start
```

### Frontend

1. Navegue até o diretório `frontend`:

```sh
cd frontend
```

2. Instale as dependências:

```sh
npm install
```

3. Execute o front-end:

```sh
npm start
```

## Testes

### Backend

1. Instale as dependências de teste:

```sh
npm install --save-dev mocha chai chai-http
```

2. Execute os testes:

```sh
npm run test
```

### Frontend

1. Navegue até o diretório `frontend` e instale as dependências de teste:

```sh
cd frontend
npm install --save-dev jest @testing-library/react @testing-library/jest-dom
```

2. Execute os testes:

```sh
npm run test
```

## Endpoints da API

### Salvar Formulário

**POST /api/forms/save**

```json
{
  "nome": "string",
  "email": "string",
  "data_nascimento": "string",
  "descricao": "string",
  "cpf": "string",
  "pais": "string",
  "estado": "string",
  "cidade": "string",
  "arquivos": ["file1", "file2"]
}
```

### Buscar Formulários de um Usuário

**GET /api/forms/:userId**

### Atualizar Formulário

**PUT /api/forms/update/:id**

```json
{
  "nome": "string",
  "email": "string"
}
```

### Deletar Formulário

**DELETE /api/forms/delete/:id**

## Documentação

Para mais detalhes sobre a implementação e uso da aplicação, consulte a documentação no repositório do GitHub.

## Contribuições

Contribuições são bem-vindas! Por favor, envie um pull request ou abra uma issue para discutir as mudanças que deseja fazer.

## Licença

Este projeto está licenciado sob a licença MIT.
