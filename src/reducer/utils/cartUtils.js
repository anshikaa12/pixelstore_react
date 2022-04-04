function addToCartList(state, action) {
  const {
    name,
    _id,
    subtext,
    price,
    originalprice,
    discount,
    image,
    quantity,
  } = action.payload;
  let isProductPresent = false;
  let updatedList = state.cartlist.map((item) => {
    if (item._id === action.payload._id) {
      isProductPresent = true;
      return { ...item, quantity: item.quantity - 1, qty: item.qty + 1 };
    }
    return item;
  });
  if (!isProductPresent) {
    updatedList = [
      ...state.cartlist,
      {
        name,
        _id,
        subtext,
        price,
        originalprice,
        discount,
        image,
        quantity: quantity - 1,
        qty: 1,
      },
    ];
  }
  return updatedList;
}

function plusQuantityCart(state, action) {
  let updatedQntList = state.cartlist.map((item) => {
    if (item._id === action.payload._id) {
      return { ...item, qty: item.qty + 1 };
    }
    return item;
  });
  return updatedQntList;
}

function minusQuantityCart(state, action) {
  let updatedQntList = state.cartlist.map((item) => {
    if (item._id === action.payload._id) {
      return { ...item, qty: item.qty - 1 };
    }
    return item;
  });

  return updatedQntList;
}

export { minusQuantityCart, plusQuantityCart, addToCartList };
