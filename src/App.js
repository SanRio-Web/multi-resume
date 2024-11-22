import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Navigation from "./components/Navigation";

const App = () => {
  return (
    <div className="App">
      <div className="app-wrapper">
        <Header />
        <Navigation />
        <Main />
      </div>
    </div>
  );
};

export default App;
