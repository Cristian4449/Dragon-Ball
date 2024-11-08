import "./App.css";
import Header from "./Components/Header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePages/HomePages";
import CharacterPage from "./Pages/CharacterPages/CharacterPages";
import AboutPages from "./Pages/AboutPages/AboutPages";
import MyInfoPage from "./Pages/MyInfoPage/MyInfoPage";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/character/:specie" element={<CharacterPage />} />
          <Route path="/details/:id" element={<AboutPages />} />
          <Route path="/my-info" element={<MyInfoPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
