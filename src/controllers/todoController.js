// controllers/todoController.js
import { ToDo } from '../models/todoModel.js';

export default class ToDoController {

  static async listarTasks(req, res) {
    try {
      const tasks = await ToDo.findAll({ order: [['createdAt', 'DESC']] });
      return res.status(200).json(tasks);
    } catch (error) {
      return res.status(500).json({ erro: 'Erro ao listar tasks', error: error.message });
    }
  }

  static async criar(req, res) {
    try {
      const { title, description, status } = req.body;

      if (!title || title.trim() === '') {
        return res.status(400).json({ erro: "O campo 'title' é obrigatório." });
      }

      const novaTask = await ToDo.create({
        title: title.trim(),
        description: description || '',
        status: status || 'pendente'
      });

      return res.status(201).json({ msg: 'Task criada com sucesso!', task: novaTask });

    } catch (error) {
      return res.status(500).json({ erro: 'Erro ao criar tarefa.', error: error.message });
    }
  }

  static async listarPorId(req, res) {
    try {
      const { id } = req.params;
      const task = await ToDo.findByPk(id);
      if (!task) return res.status(404).json({ msg: 'task não encontrada!' });
      return res.status(200).json(task);
    } catch (error) {
      return res.status(500).json({ msg: 'erro ao buscar task!', error: error.message });
    }
  }

  static async atualizar(req, res) {
    try {
      const { id } = req.params;
      const { title, description, status } = req.body;

      const task = await ToDo.findByPk(id);
      if (!task) return res.status(404).json({ msg: 'Task não encontrada!' });

      if (title !== undefined) task.title = title.trim();
      if (description !== undefined) task.description = description;
      if (status !== undefined) task.status = status;

      await task.save();

      return res.status(200).json({ msg: 'Task atualizada com sucesso!', task });
    } catch (error) {
      return res.status(500).json({ msg: 'Erro ao atualizar task!', error: error.message });
    }
  }

  static async deletar(req, res) {
    try {
      const { id } = req.params;
      const task = await ToDo.findByPk(id);
      if (!task) return res.status(404).json({ msg: 'task não encontrada' });
      await task.destroy();
      return res.status(200).json({ msg: 'task deletada com sucesso!' });
    } catch (error) {
      return res.status(500).json({ msg: 'erro ao deletar task!', error: error.message });
    }
  }

}
