import { useProduct } from "../services/product_api"


function filterReducer(state,action){
switch(action.type){
    case "SORT_PRICE":
        return {...state,sortBy:action.payload}
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

export {filterReducer,sorted_price_list}