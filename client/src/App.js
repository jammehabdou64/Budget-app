import Header from "./components/Header";
import BudgetInput from "./components/BudgetInput";
import Income from "./components/Income";
import Expenses from "./components/Expenses";
import "./App.css";
import "./fonts/css/all.min.css";

function App() {
  return (
    <div className="App">
      <Header />
      <BudgetInput />
      <div className="content">
        <div className="budget-container">
          <Income />
          <Expenses />
        </div>
      </div>
    </div>
  );
}

export default App;
