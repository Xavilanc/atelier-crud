import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Tablette from "./Tablette";

function TablettesList() {
  const [tablettes, setTablettes] = useState("");

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/tablettes`)
      .then((response) => response.data)
      .then((data) => setTablettes(data));
  }, []);
  return (
    <div>
      {tablettes &&
        tablettes.map((tablette) => (
          <Link to={`/tablettes/${tablette.id}`} key={tablette.id}>
            <Tablette tablette={tablette} />
          </Link>
        ))}
    </div>
  );
}

export default TablettesList;
