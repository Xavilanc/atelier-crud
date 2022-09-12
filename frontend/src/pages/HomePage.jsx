import TablettesList from "@components/TablettesList";
import { Link } from "react-router-dom";
import "./Pages.css";

export default function HomePage() {
  return (
    <div>
      <h1> Bienvenue dans un univers dédié au tablettes de chocolat</h1>
      <div className="tablettes-title-box">
        <Link to="/tablettes/create">
          <div className="create-tablette">Ajouter une tablette</div>
        </Link>
      </div>
      <TablettesList />
    </div>
  );
}
