import logo from './logo.svg';
import './App.css';
import { ListTask } from './ListTask';
import { AddTask } from './AddTask';

function App() {
  return (
    <div className="App">
      <h1>todo list-application</h1>
      <AddTask/>
     <ListTask/>
    </div>
  );
}

export default App;
