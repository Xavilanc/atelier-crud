import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Tablette from "../components/Tablette";
import ReturnButton from "../components/ReturnButton";

export default function TablettesPage() {
  const [tablette, setTablette] = useState("");

  const params = useParams();

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/tablettes/${params.id}`)
      .then((response) => response.data)
      .then((data) => setTablette(data));
  }, []);

  return (
    <>
      <Tablette tablette={tablette} />
      <ReturnButton />
    </>
  );
}
