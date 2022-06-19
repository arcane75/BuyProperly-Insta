import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./components/HomePage";
import ImageDetails from "./components/ImageDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/imagedetails/:id" element={<ImageDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
