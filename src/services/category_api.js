import { useEffect, useState } from "react";
import axios from "axios";

function useCategory() {
  const [category, setCategory] = useState([]);
  useEffect(
    () =>
      axios
        .get("/api/categories")
        .then((resp) =>
          setCategory(resp.data.categories).catch((err) => console.error(err))
        ),
    []
  );
  return {
    category,
  };
}
export { useCategory };
