import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./Pages.css";
import ReturnButton from "../components/ReturnButton";

function TablettePage() {
  const [tablette, setTablette] = useState({
    name: "",
    brand: "",
    packaging: "",
  });

  const params = useParams();
  const [updateStatut, setUpdateStatut] = useState(0);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/tablettes/${params.id}`)
      .then((response) => response.data)
      .then((data) => setTablette(data));
  }, []);

  const updateTablette = () => {
    axios
      .put(`${import.meta.env.VITE_BACKEND_URL}/tablettes/${params.id}`, {
        ...tablette,
      })
      .then((response) => {
        console.error(response);
        console.error(response.data);
      });
  };

  const deleteTablette = () => {
    if (confirm("Voulez-vous vraiment supprimer cette fiche ?")) {
      axios.delete(
        `${import.meta.env.VITE_BACKEND_URL}/tablettes/${params.id}`
      );
      setUpdateStatut(2);
    }
  };

  if (updateStatut === 0) {
    return (
      <div>
        <h1>Modifier une tablette</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            updateTablette();
            setUpdateStatut(true);
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
          <input type="submit" value="Modifier une tablette" />
        </form>
        <button
          className="delete-btn"
          type="button"
          onClick={() => deleteTablette()}
        >
          Supprimer
        </button>
        <ReturnButton />
      </div>
    );
  }

  if (updateStatut === 2) {
    return (
      <div>
        <h1>Votre tablette à bien été supprimée</h1>
        <ReturnButton />
      </div>
    );
  }

  return (
    <div>
      <h1>Votre tablette à bien été mise à jour</h1>
      <ReturnButton />
    </div>
  );
}

export default TablettePage;
