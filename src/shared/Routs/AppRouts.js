import React from "react";
import { BrowserRouter , Route, Link, Routes } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Link to="/">Home</Link>
    </div>
  );
};

const AppRouts = () => {
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={Home} />
    </Routes>
  </BrowserRouter>;
};
export default AppRouts;
