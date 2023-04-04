import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { Model, createServer } from 'miragejs';

createServer({
  models: {
    transactions: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Freelance de Website',
          type: 'deposit',
          category: 'Dev',
          amount: 5000,
          createdAt: new Date('2022-03-12 09:00:00')
        },
        {
          id: 2,
          title: 'Compras',
          type: 'withdraw',
          category: 'Mercado',
          amount: 600,
          createdAt: new Date('2022-03-12 09:00:00')
        },
        {
          id: 3,
          title: 'Aluguel',
          type: 'withdraw',
          category: 'Casa',
          amount: 900,
          createdAt: new Date('2022-03-12 09:00:00')
        },
      ]
    });
  },

  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transactions');
    });

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create('transactions', data);
    });
  },
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
