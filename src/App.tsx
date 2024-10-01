import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./components/Home";
import NewProduct from "./components/NewProduct";
import UpdateProduct from "./components/UpdateProduct";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/new" element={<NewProduct />} />
            <Route path="/product/:id" element={<UpdateProduct />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
