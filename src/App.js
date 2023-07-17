import "./App.scss";
import { Outlet } from "react-router-dom";
import Nav from "./components/sections/header/components/nav";
import "@fortawesome/fontawesome-free/css/all.min.css";

import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {
  return (
    <div className="vh-100 vw-100 bg">
      <header className="w-100 border-bottom border-info">
        <Nav />
      </header>
      <main className="d-felx flex-column w-100 h-100">
        <Outlet />
      </main>
    </div>
  );
}

export default App;
