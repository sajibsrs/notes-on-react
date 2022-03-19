import './App.css';
import CountDown from './components/Counter';
import CustomerList from './components/CustomerList';
import Customers from './components/customers.json';

function App() {
  const customers = Customers;
  
  return (
    <div className="App">
      <header className="App-header">
        React
        <CountDown />
        <CustomerList list={customers} />
      </header>
    </div>
  );
}

export default App;
