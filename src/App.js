import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Navigation from "./components/Navigation/Navigation";

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
