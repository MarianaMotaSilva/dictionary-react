import "./App.css";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div claassName="container"></div>
      <header className="App-header">
        <p>
          <center>Dictionary App</center>
        </p>
      </header>
      <main>
        <Dictionary />
      </main>
      <footer className="text-center">Coded by Mariana Mota da Silva</footer>
    </div>
  );
}

export default App;
