import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import Addbooks from "./Pages/Addbooks";
import Managelibrary from "./Pages/Managelibrary";
import Editbooks from "./Pages/Editbooks";
import Footer from "./Components/Footer";
import Topbar from "./Components/Topbar";

const App = () => {
  const [id, setId] = useState(0)
  return (
    <div>
      {/* BrowserRouter,Router,Route for Routing */}
      <BrowserRouter>
        <div>
          <Topbar />
        </div>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/addbooks" element={<Addbooks />} />
          <Route path="/managelibrary" element={<Managelibrary setId={setId} />} />
          <Route path="/editbooks/:id" element={<Editbooks id={id} />} />
        </Routes>
        <div>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;