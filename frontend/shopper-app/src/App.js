import './App.css';
import PricesProvider from './context/PricesProvider';
import Form from './components/Form';

function App() {
  return (
    <PricesProvider>
      <div className="App">
        <Form />
      </div>
    </PricesProvider>
  );
}

export default App;
