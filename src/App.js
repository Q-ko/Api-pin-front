import "./App.scss";
import { Outlet } from "react-router-dom";
import Nav from "./components/sections/header/components/nav";

function App() {
  return (
    <div className="position-relative vh-100 vw-100">
      <header className="w-100">
        <Nav />
      </header>
      <main className="main h-100">
        <Outlet />
      </main>
    </div>
  );
}

export default App;
