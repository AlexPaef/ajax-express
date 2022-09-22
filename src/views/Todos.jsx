const React = require('react');
const Layout = require('./Layout');

module.exports = function Todos({ todos }) {
  return (
    <Layout>
      <h1>Todos page</h1>
      <form name="addTodoForm" action="/todos/add" method="POST">
        <div className="mb-3">
          <label htmlFor="input1" className="form-label">
            Название
          </label>
          <input
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
            type="text"
            name="description"
            className="form-control"
            id="input2"
          />
        </div>
        <button type="submit" className="btn btn-primary mb-3">
          Отправить
        </button>
      </form>
      <div className="todos">
        {todos.map((el) => (
          <div data-id={el.id} key={el.id} className="card mb-3">
            <div className="card-body">
              <h5 className="card-title">{el.title}</h5>
              <p className="card-text">{el.description}</p>
              <a href={`/todos/edit/${el.id}`} className="btn btn-primary">
                Правка
              </a>
              <button className="btn btn-danger m-2 js-delete">
                Удаление
              </button>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};
