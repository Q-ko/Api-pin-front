import "./App.css";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import Nav from "./components/sections/header/components/Nav";

function App() {
  return (
    <div>
      <header>
        <Nav />
      </header>
      <main className="main">
        <Outlet />
      </main>
    </div>
  );
}

export default App;
