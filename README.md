# ⚽ Champions League API

Uma API REST desenvolvida com **Node.js**, **Express** e **TypeScript** para gerenciamento de jogadores inspirados na UEFA Champions League.

O projeto foi criado com fins de estudo para praticar conceitos de arquitetura em camadas (**Controller → Service → Repository**), manipulação de dados, tipagem com TypeScript e construção de APIs REST.

---

## 🚀 Tecnologias

* Node.js
* Express
* TypeScript
* tsx
* REST API

---

## 📂 Arquitetura

```text
src/
├── controllers/
├── services/
├── repositories/
├── models/
├── routes/
├── utils/
└── server.ts
```

### Camadas

* **Controllers**: recebem as requisições HTTP.
* **Services**: contêm as regras de negócio.
* **Repositories**: realizam o acesso aos dados.
* **Models**: definem as interfaces e tipos.
* **Utils**: helpers para respostas HTTP.

---

## 📋 Funcionalidades

### Jogadores

* Listar todos os jogadores
* Buscar jogador por ID
* Criar novo jogador
* Atualizar estatísticas de um jogador
* Remover jogador

---

## 📊 Estrutura do Jogador

```json
{
  "id": 1,
  "name": "Lionel Messi",
  "club": "Inter Miami",
  "nationality": "Argentina",
  "position": "Forward",
  "statistics": {
    "Overall": 91,
    "Pace": 85,
    "Shooting": 92,
    "Passing": 91,
    "Dribbling": 95,
    "Defending": 38,
    "Physical": 65
  }
}
```

---

## 🔗 Endpoints

### Listar jogadores

```http
GET /players
```

#### Resposta

```json
[
  {
    "id": 1,
    "name": "Lionel Messi"
  }
]
```

---

### Buscar jogador por ID

```http
GET /players/:id
```

#### Exemplo

```http
GET /players/1
```

---

### Criar jogador

```http
POST /players
```

#### Body

```json
{
  "id": 19,
  "name": "David Beckham",
  "club": "Retired",
  "nationality": "England",
  "position": "Midfielder",
  "statistics": {
    "Overall": 85,
    "Pace": 76,
    "Shooting": 82,
    "Passing": 90,
    "Dribbling": 84,
    "Defending": 70,
    "Physical": 72
  }
}
```

---

### Atualizar estatísticas

```http
PATCH /players/:id
```

#### Body

```json
{
  "Overall": 90,
  "Pace": 85,
  "Shooting": 91,
  "Passing": 92,
  "Dribbling": 90,
  "Defending": 60,
  "Physical": 80
}
```

---

### Remover jogador

```http
DELETE /players/:id
```

#### Exemplo

```http
DELETE /players/5
```

---

## ▶️ Executando o projeto

### Clone o repositório

```bash
git clone https://github.com/seu-usuario/champions-league-api.git
```

### Acesse a pasta

```bash
cd champions-league-api
```

### Instale as dependências

```bash
npm install
```

### Execute o projeto

```bash
npm run start:dev
```

ou

```bash
npm run dev
```

---

## 🎯 Objetivo do Projeto

Este projeto foi desenvolvido para praticar:

* APIs REST
* TypeScript
* Express
* Arquitetura em camadas
* CRUD completo
* Boas práticas de organização de código

---

## 👨‍💻 Autor

**Lucas Antonio Santos Alves**

* Tecnólogo em Sistemas para Internet - IFSP Birigui
* Bacharel em Engenharia de Software

Projeto desenvolvido para estudos e portfólio.
