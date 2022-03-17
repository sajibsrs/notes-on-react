import './App.css';
import CustomerList from './components/CustomerList';
import Customers from './components/customers.json';

function App() {
  const customers = Customers;
  
  return (
    <div className="App">
      <header className="App-header">
        React
        <CustomerList list={customers} />
      </header>
    </div>
  );
}

export default App;
