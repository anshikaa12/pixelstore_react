import { createContext, useContext, useReducer } from "react";
import { filterReducer } from "../reducer/filterreducer";
const FilterContext = createContext();

const FilterProvider = ({ children }) => {
  const [filterState, filterFunc] = useReducer(filterReducer, {
    sortBy: "",
    categories: [],
    brand: [],
    stock: false,
    rate: null,
  });

  return (
    <FilterContext.Provider value={{ filterState, filterFunc }}>
      {children}
    </FilterContext.Provider>
  );
};
const useFilter = () => useContext(FilterContext);
export { useFilter, FilterProvider };
