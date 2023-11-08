import "./App.css";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import Footer from "./Components/Footer";
import View from "./Pages/View";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        {/* with path parameter */}
        <Route path="/view/:id" element={<View />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
