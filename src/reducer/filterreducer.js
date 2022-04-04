import { useProduct } from "../services/product_api"


function filterReducer(state,action){
switch(action.type){
    case "SORT_PRICE":
        return {...state,sortBy:action.payload}
    case "SORT_CATEGORY":
        return {...state,categories:state.categories.includes(action.payload)?state.categories.filter(item=>item!==action.payload):[...state.categories,action.payload]}
}
}

function sorted_price_list(sortBy,cardData){

if(sortBy == "HIGH_TO_LOW"){
    return [...cardData].sort((a, b) => b["price"] - a["price"]);
}
if(sortBy == "LOW_TO_HIGH"){
    return [...cardData].sort((a, b) => a["price"] - b["price"]);
}
return cardData;

}

function sorted_category_list(categories,cardData){
   let updatedList= [...cardData].filter(item=>categories.includes(item.category));
   return updatedList;
}

export {filterReducer,sorted_price_list, sorted_category_list}