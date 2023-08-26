import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import BooksProvider from './Context/BooksProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BooksProvider>
      <App />
    </BooksProvider>
);