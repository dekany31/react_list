
import './App.css';
import listItems from "./components/listItems";

function App() {
  return (
    <form className = "App">
      <ul className = "app">
        {listItems}
      </ul>
    </form>
  );
}

export default App;
