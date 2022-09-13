import { useNavigate } from "react-router-dom";
import "./Tablette.css";

function EditTabletteButton({ id }) {
  const navigate = useNavigate();
  return (
    <div>
      <button
        type="button"
        className="edit-button"
        onClick={() => navigate(`/tablettes/tablette/${id}`)}
      >
        Éditer cette fiche
      </button>
    </div>
  );
}

export default EditTabletteButton;
