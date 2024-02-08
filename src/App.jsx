import { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import AllRoutes from "./AllRoutes";


function App() {
  return (
    <>
      <Navbar />
      <AllRoutes/>
    </>
  );
}

export default App;
