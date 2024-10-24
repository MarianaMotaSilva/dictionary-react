import logo from "./logo.png";
import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">
          <small>
            This project was coded by{" "}
            <a
              href="https://github.com/MarianaMotaSilva"
              target="_blank"
              rel="noopener noreferrer"
            >
              Mariana Mota da Silva
            </a>{" "}
            and is{" "}
            <a
              href="https://github.com/MarianaMotaSilva/dictionary-react"
              target="_blank"
              rel="noopener noreferrer"
            >
              open-sourced on GitHub
            </a>{" "}
            and{" "}
            <a
              href="https://app.netlify.com/teams/marianamotasilva/sites"
              target="_blank"
              rel="noopener noreferrer"
            >
              hosted on Netlify.
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}

export default App;
