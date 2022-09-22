const React = require('react');
const Layout = require('./Layout');

module.exports = function TodoEdit({ todo }) {
  return (
    <Layout>
      <h1>Todos page</h1>
      <form action="/todos/edit" method="POST">
        <input type="hidden" name="id" value={todo.id} />
        <div className="mb-3">
          <label htmlFor="input1" className="form-label">
            Название
          </label>
          <input
            value={todo.title}
            type="text"
            name="title"
            className="form-control"
            id="input1"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="input2" className="form-label">
            Описание
          </label>
          <input
            value={todo.description}
            type="text"
            name="description"
            className="form-control"
            id="input2"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Отправить
        </button>
      </form>
    </Layout>
  );
};
