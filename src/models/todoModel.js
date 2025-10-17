// models/taskModel.js

export let tasks = [
  {
    id: 1,
    title: "Estudar Node.js",
    description: "Revisar módulos, rotas e middlewares",
    status: "pendente",
    createdAt: new Date().toISOString()
  },
  {
    id: 2,
    title: "Fazer o deploy da API",
    description: "Publicar no Render ou Railway",
    status: "pendente",
    createdAt: new Date().toISOString()
  },
  {
    id: 3,
    title: "Atualizar README",
    description: "Adicionar instruções e exemplos de requisição",
    status: "concluída",
    createdAt: new Date().toISOString()
  },
  {
    id: 4,
    title: "Criar rota GET /tasks",
    description: "Implementar listagem de todas as tarefas",
    status: "pendente",
    createdAt: new Date().toISOString()
  },
  {
    id: 5,
    title: "Criar rota POST /tasks",
    description: "Implementar criação de novas tarefas com validação de título",
    status: "pendente",
    createdAt: new Date().toISOString()
  },
  {
    id: 6,
    title: "Criar rota PUT /tasks/:id",
    description: "Permitir atualização de título, descrição e status",
    status: "pendente",
    createdAt: new Date().toISOString()
  },
  {
    id: 7,
    title: "Criar rota DELETE /tasks/:id",
    description: "Remover uma tarefa existente pelo ID",
    status: "pendente",
    createdAt: new Date().toISOString()
  },
  {
    id: 8,
    title: "Testar API com Insomnia",
    description: "Verificar todos os endpoints e mensagens de erro",
    status: "concluída",
    createdAt: new Date().toISOString()
  },
  {
    id: 9,
    title: "Documentar a API",
    description: "Criar documentação no README.md explicando cada rota",
    status: "pendente",
    createdAt: new Date().toISOString()
  },
  {
    id: 10,
    title: "Containerizar o projeto",
    description: "Encapsular a aplicação em Docker para deploy",
    status: "pendente",
    createdAt: new Date().toISOString()
  }
];
