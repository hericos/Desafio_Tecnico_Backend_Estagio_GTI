import express from 'express';
import todoRoutes from './src/routes/todoRoutes.js';
import { sequelize } from './src/models/todoModel.js';

const app = new express();
const PORT = process.env.PORT || 3005;

app.use(express.json());
app.use('/tasks', todoRoutes);

app.get('/', (req, res) => {
  res.send('API ESTA FUNCIONANDO!');
});

// Sincronizar modelos e iniciar servidor
sequelize.sync()
  .then(() => {
    console.log('Conectado ao PostgreSQL e modelos sincronizados');
    app.listen(PORT, () => {
      console.log(`Servidor esta rodando na porta http://localhost:${PORT}`);
    });
  })
  .catch(err => {
    console.error('Erro ao conectar no PostgreSQL:', err.message);
    process.exit(1);
  });