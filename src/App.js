import React from 'react';
import './App.css';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className='todo-app'>
      <TodoList />
      <footer>
        <div className="copyright">Copyright by Ammar</div>
      </footer>
    </div>
  );
}

export default App;