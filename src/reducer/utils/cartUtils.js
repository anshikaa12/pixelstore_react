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

  let updatedList = [
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
