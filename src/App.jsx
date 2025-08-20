import Header from "../components/Header";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Singlepage from "./pages/Singlepage";
import PNF from "./pages/PNF";
import Footer from "../components/Footer";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/singlepage/:id" element={<Singlepage />} />
        <Route path="*" element={<PNF/>} />

      </Routes>
      <Footer/>
    </>
  );
}

export default App;
