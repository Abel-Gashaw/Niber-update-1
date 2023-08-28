import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Programs from "./pages/Programs";
import Human from "./pages/Human";
import Donate from "./pages/Donate";
import LoginPage from "./pages/LoginPage";

// App.js

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/humanitarian" element={<Human />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/LoginPage" element={<LoginPage />} />
      </Routes>

      <Footer />
    </div>
  );
}
export default App;
