import { createContext, useContext, useReducer } from "react";
import { filterReducer } from "../reducer/filterreducer";
const filter = createContext();
const useFilter = () => useContext(filter);

const FilterProvider = ({ children }) => {
  const [filterState, filterFunc] = useReducer(filterReducer, {
    sortBy: "",
    categories: [],
  });

  return (
    <filter.Provider value={{ filterState, filterFunc }}>
      {children}
    </filter.Provider>
  );
};

export { useFilter, FilterProvider };
