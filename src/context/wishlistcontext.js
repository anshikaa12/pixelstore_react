import { createContext, useContext, useReducer } from "react";
import { wishlistReducer } from "../reducer/wishlistReducer";

const wish = createContext();
const useWishlist = () => useContext(wish);

const WishlistProvider = ({ children }) => {
  const [currState, wishFunc] = useReducer(wishlistReducer, { wishlist: [] });
  return (
    <wish.Provider value={{ currState, wishFunc }}>{children}</wish.Provider>
  );
};

export { useWishlist, WishlistProvider };
