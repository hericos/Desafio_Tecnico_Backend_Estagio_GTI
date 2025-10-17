# To-Do API – Desafio Técnico Backend (Estágio GTI/SME Parnamirim)

API RESTful para gerenciamento de tarefas (To-Do List), desenvolvida em **Node.js**. Permite criar, listar, atualizar e deletar tarefas.

---

## 🌐 URL de acesso à API

A API está deployada no Render e pode ser acessada publicamente em:
**[https://desafio-tecnico-backend-estagio-gti.onrender.com/tasks](https://desafio-tecnico-backend-estagio-gti.onrender.com/tasks)**

---

## 📦 Instalação local

Caso queira rodar localmente:

1. Clone o repositório:

```bash
git clone https://github.com/heitorpita/Desafio_Tecnico_Backend_Estagio_GTI.git
cd Desafio_Tecnico_Backend_Estagio_GTI
```

2. Instale as dependências:

```bash
npm install
```

3. Inicie a aplicação:

```bash
node app.js
```

> Por padrão, a aplicação roda na porta `3000`.

---

## 🚀 Estrutura e boas práticas

* **Organização em camadas:** a aplicação está estruturada em `routes`, `controllers` e `services`, facilitando manutenção e escalabilidade.
* **Documentação da API:** descrita no próprio README.md para referência rápida; também é possível integrar Swagger para documentação mais interativa.
* **Deploy funcional:** a API está online em URL pública, permitindo acesso remoto e testes reais.
* **Container Docker:** a aplicação está dockerizada, garantindo portabilidade e fácil deploy em diferentes ambientes.

```

---

## ✨ Testando a API

Para testar as rotas, utilizei o **Insomnia**, que permite enviar requisições HTTP de forma prática e visualizar respostas rapidamente. Você pode testar os endpoints de criação, listagem, atualização e remoção de tarefas diretamente pela interface do Insomnia ou de outro client HTTP de sua preferência.

* **GET /tasks** → lista todas as tarefas.
* **GET /tasks/:id** → retorna uma tarefa específica.
* **POST /tasks** → cria uma nova tarefa.
* **PUT /tasks/:id** → atualiza uma tarefa existente.
* **DELETE /tasks/:id** → remove uma tarefa.

> Recomenda-se enviar o `Content-Type: application/json` no corpo das requisições POST e PUT.

---

## ⚡ Observações

* O campo `title` é **obrigatório** na criação de tarefas.
* O campo `status` só pode ser `"pendente"` ou `"concluída"`.
* O campo `createdAt` é gerado automaticamente no momento da criação da tarefa.

---

## 🐳 Docker

Para rodar a aplicação com Docker:

```bash
docker build -t todo-api .
docker run -p 3000:3000 todo-api
```

A aplicação ficará disponível em `http://localhost:3000`.

---

Feito por **Heitor Pita** para o Desafio Técnico Backend – Estágio GTI/SME Parnamirim.
