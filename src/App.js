import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landingpage from "./pages/Landingpage";
import Login from "./pages/Login";
import Sign from "./pages/Sign";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landingpage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/sign" element={<Sign />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
    </BrowserRouter>
  );
}

export default App;
