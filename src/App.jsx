import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Cards from "./components/Cards/Cards";

function App() {
  return (
    <>
      <h4 className="text-2xl font-semibold text-center mt-4 mb-4">
        Course Registration
      </h4>
      <Cards></Cards>
    </>
  );
}

export default App;
