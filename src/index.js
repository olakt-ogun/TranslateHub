import React from 'react';
import ReactDOM from 'react-dom/client';
import TranslationWebsite from './App';
import 'semantic-ui-css/semantic.min.css'
import './App.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className='body'>
    <TranslationWebsite />
  </div>
);

