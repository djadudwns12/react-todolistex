import './App.css';
import Header from './component/Header';
import TodoEditor from './component/TodoEditor';
import TodoList from './component/TodoList';

function App() {
  return (
    <div className="App">
      <h2>ToDoList</h2>
      <div>
        <Header />
      </div>
      <div>
        <TodoEditor />
      </div>
      <div>
        <TodoList />
      </div>
    </div>
  );
}

export default App;
