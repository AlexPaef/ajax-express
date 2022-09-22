1. Инициализация проекта
  - npm init -y
  - npm i express
  - npx create-gitignore node
  - npx eslint --init
  - npm i -D nodemon morgan

2. Установим React(ssr) Babel
  - npm i @babel/core @babel/preset-env @babel/preset-react @babel/register react react-dom
  - touch .babelrc
    {
      "presets": [
        "@babel/preset-env",
        "@babel/preset-react"
      ]
    }
    "dev": "nodemon src/index.js --ext js,jsx"

3. Установка sequelize
  - npm i sequelize sequelize-cli pg pg-hstore
    .sequelizerc
      require('dotenv').config();
      const path = require('path');
      module.exports = {
        'config': path.resolve('db', 'config', 'database.json'),
        'models-path': path.resolve('db', 'models'),
        'seeders-path': path.resolve('db', 'seeders'),
        'migrations-path': path.resolve('db', 'migrations'),
      };
  - npx sequelize init
    #database.json
      "development": {
        "use_env_variable": "DATABASE_URL"
      },
  - npx sequelize db:create
  - npx sequelize model:generate --name Todo --attributes title:string,description:string
  - npx sequelize db:migrate

4. env переменные
  - npm i dotenv
  - touch .env
    require('dotenv').config();
    #DATABASE_URL=postgres://postgres:postgres@localhost:5432/todos

5. renderTemplate
require('@babel/register');
const ReactDOMServer = require('react-dom/server');
const React = require('react');

const renderTemplate = (reactElement, properties, response) => {
  const reactEl = React.createElement(reactElement, properties);

  const html = ReactDOMServer.renderToStaticMarkup(reactEl);

  response.write('<!DOCTYPE html>');
  response.write(html);
  response.end();
};

module.exports = renderTemplate;

6. Layout
const React = require('react');

// eslint-disable-next-line react/prop-types
module.exports = function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
      </head>
      <body>
        <div className="container layout">{children}</div>
        <footer className="footer">
          <div></div>
        </footer>
      </body>
    </html>
  );
};