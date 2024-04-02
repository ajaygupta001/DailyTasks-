import "./App.css";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";

function App() {
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<Header />} />
    //     <Route path="/home" element={<Home />} />
    //   </Routes>
    // </BrowserRouter>
    <div>
      <Header />
      <Home />
    </div>
  );
}

export default App;
