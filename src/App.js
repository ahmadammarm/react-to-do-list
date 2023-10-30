import React from 'react';
import './App.css';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className='todo-app'>
      <TodoList />
      <footer>
        <div className="copyright">&copy; 2023 <a href='https://ammar-porto.vercel.app' target='_blank' rel="noreferrer">Ammar</a>. All Right Reserved</div>
      </footer>
    </div>
  );
}

export default App;
