import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Recommendations from "./components/Recommendations";
import Podcasts from "./components/Podcasts";
import { UserContext } from "./contexts/UserContext";
import Home from "./components/Home";
import { useState } from "react";

function App() {
  const [user, setUser] = useState("Alan");
  return (
    <>
      <h1 className="text-3xl text-center py-4">USE CONTEXT</h1>
      <UserContext.Provider value={[user, setUser]}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/recommendations" element={<Recommendations />} />
            <Route path="/podcasts" element={<Podcasts />} />
          </Routes>
        </Router>
      </UserContext.Provider>
    </>
  );
}

export default App;
