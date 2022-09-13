import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import TablettesPage from "./pages/TablettesPage";
import TabletteCreatePage from "./pages/TabletteCreatePage";
import TablettePage from "./pages/TablettePage";

import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tablettes/:id" element={<TablettesPage />} />
        <Route path="/tablettes/create" element={<TabletteCreatePage />} />
        <Route path="/tablettes/tablette/:id" element={<TablettePage />} />
      </Routes>
    </Router>
  );
}

export default App;
