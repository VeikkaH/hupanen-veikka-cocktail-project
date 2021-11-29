import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import SingleCocktail from "./pages/SingleCocktail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/cocktail/:id" element={<SingleCocktail />} />
      </Routes>
    </Router>
  );
}

export default App;