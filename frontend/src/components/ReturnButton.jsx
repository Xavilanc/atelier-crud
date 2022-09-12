import { Link } from "react-router-dom";

function ReturnButton() {
  return (
    <div>
      <Link to="/">
        <div className="return-button">Retour à l'accueil</div>
      </Link>
    </div>
  );
}

export default ReturnButton;
