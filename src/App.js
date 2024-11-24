import "./App.css";
import Header from "./components/Header/Header";
import Projects from "./components/Projects/Projects";
import Navigation from "./components/Navigation/Navigation";
import Profile from "./components/Profile/Profile";
import { BrowserRouter, Routes, Route } from "react-router";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="app__wrapper">
          <Header />
          <Navigation />

          <div className="app__content">
            <Routes>
              <Route path="/" element={<Profile />} />
              <Route path="/projects" element={<Projects />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
