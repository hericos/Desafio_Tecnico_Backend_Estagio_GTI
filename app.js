import express from 'express';
import todoRoutes from './src/routes/todoRoutes.js';

const app = new express();
const PORT = 3005;

app.use(express.json());

app.use('/tasks', todoRoutes);

app.get('/', (req, res) => {

res.send('API ESTA FUNCIONANDO!')

})


app.listen(PORT, () => {

    console.log(`Servidor esta rodando na porta http://localhost:${PORT}`);

})