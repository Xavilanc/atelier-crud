import { useState } from "react";
import axios from "axios";
import "./Pages.css";
import ReturnButton from "../components/ReturnButton";

function TabletteCreatePage() {
  const [tablette, setTablette] = useState({
    name: "",
    brand: "",
    packaging: "",
  });

  const [createStatut, setCreateStatut] = useState(false);

  const postTablette = () => {
    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/tablettes`, { ...tablette })
      .then((response) => {
        console.error(response);
        console.error(response.data);
      });
  };

  if (createStatut === false) {
    return (
      <div>
        <h1>Ajout d'une tablette</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            postTablette();
            setCreateStatut(true);
          }}
        >
          <input
            type="text"
            value={tablette.name}
            placeholder="Nom de la tablette"
            onChange={(e) =>
              setTablette({
                ...tablette,
                name: e.target.value,
              })
            }
          />
          <input
            type="text"
            value={tablette.brand}
            placeholder="Marque"
            onChange={(e) =>
              setTablette({
                ...tablette,
                brand: e.target.value,
              })
            }
          />
          <input
            type="text"
            value={tablette.packaging}
            placeholder="Poid"
            onChange={(e) =>
              setTablette({
                ...tablette,
                packaging: e.target.value,
              })
            }
          />
          <input type="submit" value="Créer une tablette" />
        </form>
      </div>
    );
  }

  return (
    <div>
      <h1>Votre tablette à bien été crée</h1>
      <ReturnButton />
    </div>
  );
}

export default TabletteCreatePage;
