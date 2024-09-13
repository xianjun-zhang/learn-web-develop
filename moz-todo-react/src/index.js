import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
const DATA = [
  { id: "todo-0", name: "Eat", completed: true },
  { id: "todo-1", name: "Sleep", completed: false },
  { id: "todo-2", name: "Repeat", completed: false },
];

const DATA_FILTER = [
  { id: "btn-0", name: "All", ariaPressed: true },
  { id: "btn-1", name: "Active", ariaPressed: false },
  { id: "btn-2", name: "Completed", ariaPressed: false },
];

root.render(
  <React.StrictMode>
    <App
      subject="Clarice1"
      tasks={DATA}
      filter={DATA_FILTER}
    />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
