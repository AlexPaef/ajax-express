// Найти форму
// Перехватить событие submit + отменить стандартное поведение браузера
// Сформировать данные для отправки
// Отправить запрос // fetch
// Обработать ответ

// const form = document.querySelector('form');

// console.log(form.action);
// console.log(form.method);
// console.log(form.name);
// console.log(form.name.value);

document.addTodoForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  // console.log(event.target.title.value);
  // console.log(event.target.description.value);

  const title = event.target.title.value;
  const description = event.target.description.value;
  const url = event.target.action;
  const method = event.target.method;

  const body = JSON.stringify({
    title,
    description,
  });

  const response = await fetch(url, {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
    body,
  });

  // Обработка ответа Вариант 1 - редирект
  // Смена локации на клиенте (редирект)
  // window.location.href = '/todos';

  // Обработка ответа Вариант 2 - JSON

  const data = await response.json();

  const htmlTodo = `<div class="card mb-3"><div class="card-body"><h5 class="card-title">${data.title}</h5><p class="card-text">${data.description}</p><a href="/todos/edit/${data.id}" class="btn btn-primary">Правка</a></div></div>`;

  document.querySelector('.todos').innerHTML += htmlTodo;

  // console.log(data);

});


document.querySelector('.todos').addEventListener('click', (event) => {
  if (event.target.classList.contains('js-delete')) {
    console.log('Delete id: ' + event.target.parentNode.parentNode.dataset.id);
    event.target.parentNode.parentNode.remove(event.target.parentNode);
  }
})