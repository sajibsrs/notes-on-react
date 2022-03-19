import './App.css';
import CountDown from './components/Counter';
import CustomerList from './components/CustomerList';
import Customers from './components/customers.json';
import Task from './components/Task';

function App() {
  const customers = Customers;
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>Notes on React.js</h1>
        <CountDown />
        <CustomerList list={customers} />
        <Task />
      </header>
    </div>
  );
}

export default App;
