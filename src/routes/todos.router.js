const route = require('express').Router();

const renderTemplate = require('../lib/renderTemplate');
const Todos = require('../views/Todos');
const TodoEdit = require('../views/TodoEdit');
const { Todo } = require('../../db/models');

route.get('/', async (req, res) => {
  try {
    const todos = await Todo.findAll({ raw: true });
    renderTemplate(Todos, { todos }, res);
  } catch (error) {
    console.log(error);
  }
});

route.get('/edit/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const todo = await Todo.findByPk(id, { raw: true });
    renderTemplate(TodoEdit, { todo }, res);
  } catch (error) {
    console.log(error);
  }
});

route.post('/add', async (req, res) => {
  const { title, description } = req.body;

  try {
   const data = await Todo.create({ title, description });
   res.json(data);
  } catch (error) {
    console.log(error);
  }
  // res.redirect('/todos');
});

route.post('/edit', async (req, res) => {
  const { id, title, description } = req.body;
  try {
    await Todo.update(
      {
        title: title,
        description: description,
      },
      { where: { id } }
    );
  } catch (error) {
    console.log(error);
  }
  res.redirect('/todos');
});

module.exports = route;
