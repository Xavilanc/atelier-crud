import Tablette from "@components/Tablette";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function TablettesPage() {
  const [tablette, setTablette] = useState("");

  const params = useParams();

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/tablettes/${params.id}`)
      .then((response) => response.data)
      .then((data) => setTablette(data));
  }, []);

  return <Tablette tablette={tablette} />;
}
