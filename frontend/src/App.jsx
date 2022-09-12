import HomePage from "@pages/HomePage";
import TablettesPage from "@pages/TablettesPage";
import TabletteCreatePage from "@pages/TabletteCreatePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tablettes/:id" element={<TablettesPage />} />
        <Route path="/tablettes/create" element={<TabletteCreatePage />} />
      </Routes>
    </Router>
  );
}

export default App;
