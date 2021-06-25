const { addBookHandler, getAllBooksHandler, editBookByIdHandler, deleteBookByIdHandler, getDetailBookByIdHandler } = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: addBookHandler,
    options: {
      cors: {
        origin: ['*'],
      },
    },
  },
  {
    method: 'GET',
    path: '/books',
    handler: getAllBooksHandler,
    options: {
      cors: {
        origin: ['*'],
      },
  },
},
  {
    method: 'GET',
    path: '/books/{id}',
    handler: getDetailBookByIdHandler,
    options: {
      cors: {
        origin: ['*'],
      },
  },
},
  {
    method: 'PUT',
    path: '/books/{id}',
    handler: editBookByIdHandler,
    options: {
      cors: {
        origin: ['*'],
      },
  },
},
  {
    method: 'DELETE',
    path: '/books/{id}',
    handler: deleteBookByIdHandler,
    options: {
      cors: {
        origin: ['*'],
      },
  },
}
];

module.exports = routes;
