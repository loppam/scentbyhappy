import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./assets/Navbar";
import Notfound from "./assets/notfound";
import Home from "./assets/Home";
import Explore from "./assets/Explore";
import Login from "./assets/Login";
import Admin from "./assets/Admin";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </div>
  );
}

export default App;
