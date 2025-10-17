// controllers/todoController.js
import { tasks } from '../models/todoModel.js';

export default class ToDoController {

    static listarTasks(req, res) {
        res.status(200).json(tasks);
    }

static criar(req, res) {
    try {
        const { title, description, status } = req.body;

        
        if (!title || title.trim() === "") {
            return res.status(400).json({ erro: "O campo 'title' é obrigatório." });
        }



        const id = tasks.length + 1;
        const novaTask = {
            id,
            title: title.trim(),
            description: description || "",
            status: status || "pendente",
            createdAt: new Date().toLocaleString('pt-BR')


        };

        tasks.push(novaTask);

        res.status(201).json({ msg: "Task criada com sucesso!", task: novaTask });

    } catch (error) {
        res.status(500).json({ erro: "Erro ao criar tarefa.", error: error.message });
    }
}



    static listarPorId(req, res){
        try {
            const id = parseInt(req.params.id);
            const task = tasks.find(t => t.id === id);
            if (!task) {
                res.status(400).json({ msg: "task não encontrada!"})
                return                
            }
            res.status(200).json(task)

        } catch (error) {
            res.status(500).json({msg: "erro ao buscar aluno!"});
            return
        }
    }

    static atualizar(req, res) {
        try {
        const id = parseInt(req.params.id);
        const { title, description, status } = req.body;

        const task = tasks.find(t => t.id === id);
        if (!task) {
            return res.status(404).json({ msg: "Task não encontrada!" });
        }

        // Atualiza apenas os campos enviados
        if (title) task.title = title.trim();
        if (description !== undefined) task.description = description;
        if (status) task.status = status;

        return res.status(200).json({ msg: "Task atualizada com sucesso!", task });

    } catch (error) {
        return res.status(500).json({ msg: "Erro ao atualizar task!", error: error.message });
    }
}


    static deletar(req, res) {
        try {
            const id = parseInt(req.params.id);
            const task = tasks.findIndex(t => t.id === id);
            if (task === -1){
                res.status(404).json({msg: "task não encontrada"});
                return;
            }
            tasks.splice(task, 1);
            res.status(200).json({msg: "task deletada com sucesso!"});
        } catch (error) {
            res.status(500).json({msg: "erro ao deletar task!"});
        }
    }

}
