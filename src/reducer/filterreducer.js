import { useProduct } from "../services/product_api";

function filterReducer(state, action) {
  switch (action.type) {
    case "SORT_PRICE":
      return {
        ...state,
        sortBy: action.payload,
      };
    case "SORT_CATEGORY":
      return {
        ...state,
        categories: state.categories.includes(action.payload)
          ? state.categories.filter((item) => item !== action.payload)
          : [...state.categories, action.payload],
      };
    case "SORT_BRAND":
      return {
        ...state,
        brand: state.brand.includes(action.payload)
          ? state.brand.filter((item) => item !== action.payload)
          : [...state.brand, action.payload],
      };
    case "SORT_STOCK":
      return {
        ...state,
        stock: !state.stock,
      };
    case "SORT_RATING":
      return {
        ...state,
        rate: action.payload,
      };
    case "CLEAR_ALL":
      return {
        ...state,
        sortBy: "",
        categories: [],
        brand: [],
        stock: false,
        rate: null,
      };
  }
}

function sortedPriceList(sortBy, cardData) {
  if (sortBy === "HIGH_TO_LOW") {
    return [...cardData].sort((a, b) => b["price"] - a["price"]);
  }
  if (sortBy === "LOW_TO_HIGH") {
    return [...cardData].sort((a, b) => a["price"] - b["price"]);
  }
  return cardData;
}

function sortedCategoryList(categories, cardData) {
  let updatedList = [...cardData].filter((item) =>
    categories.includes(item.category)
  );
  return updatedList;
}

function sortedBrandsList(brands, cardData) {
  let updatedList = [...cardData].filter((item) => brands.includes(item.brand));
  console.log({ updatedList });
  return updatedList;
}

function sortedStockList(stock, cardData) {
  let updatedList;
  if (stock) {
    updatedList = cardData;
  } else {
    updatedList = cardData.filter((item) => item.inStock === true);
  }
  return updatedList;
}

function sortedRatingList(rate, cardData) {
  let updatedList = cardData.filter(
    (item) => Number(item.rating) >= Number(rate)
  );
  return updatedList;
}
export {
  filterReducer,
  sortedPriceList,
  sortedCategoryList,
  sortedBrandsList,
  sortedStockList,
  sortedRatingList,
};
