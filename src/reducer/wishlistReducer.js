import { addToWishlist, removeFromWishlist } from "./utils/wishlistUtils";
const wishlistReducer = (currState, action) => {
  switch (action.type) {
    case "ADD_TO_WISHLIST":
      return { ...currState, wishlist: addToWishlist(currState, action) };
    case "REMOVE_FROM_WISHLIST":
      return { ...currState, wishlist: removeFromWishlist(currState, action) };
  }
};
export { wishlistReducer };
