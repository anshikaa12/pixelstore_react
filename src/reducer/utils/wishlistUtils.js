function addToWishlist(state,action){
    let isPresent=false;
    let updatedWishList = state.wishlist.map(item=>{
        if(item._id===action.payload._id){
            isPresent = true;
        }
        return item;
    })
    if(!isPresent){
        updatedWishList=[...state.wishlist,action.payload];
    } 
    return updatedWishList;
}

function removeFromWishlist(state,action){
  return state.wishlist.filter(item=>item._id!==action.payload._id);
}

export {addToWishlist , removeFromWishlist}