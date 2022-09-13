import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Tablette.css";
import TabletteForList from "./TabletteForList";

function TablettesList() {
  const [tablettes, setTablettes] = useState("");
  const [coteDor, setCoteDor] = useState(false);

  const hanldeCoteDor = () => {
    setCoteDor(true);
  };

  useEffect(() => {
    if (coteDor === true) {
      axios
        .get(`${import.meta.env.VITE_BACKEND_URL}/tablettes/cotedor`)
        .then((response) => response.data)
        .then((data) => setTablettes(data));
    } else {
      axios
        .get(`${import.meta.env.VITE_BACKEND_URL}/tablettes`)
        .then((response) => response.data)
        .then((data) => setTablettes(data));
    }
  }, [coteDor]);
  return (
    <div>
      <div className="tablettes-title-box">
        <div
          className="only-cotedor"
          role="button"
          tabIndex={0}
          onClick={hanldeCoteDor}
          onKeyPress={hanldeCoteDor}
        >
          Uniquement côte d'or
        </div>
        <Link to="/tablettes/create">
          <div className="create-tablette">Ajouter une tablette</div>
        </Link>
      </div>
      <div>
        {tablettes &&
          tablettes.map((tablette) => (
            <Link to={`/tablettes/${tablette.id}`} key={tablette.id}>
              <TabletteForList tablette={tablette} />
            </Link>
          ))}
      </div>
    </div>
  );
}

export default TablettesList;
