import React from "react";
import "./App.css";

import Home from "./Pages/Home/Home";
import History from "./Pages/History/History";
import Team from "./Pages/Team/Team";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <Home />
      <History />
      <Team />
      <Footer />
    </div>
  );
}

export default App;
