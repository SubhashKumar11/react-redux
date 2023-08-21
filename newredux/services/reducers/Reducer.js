import { ADD_TO_CART, REMOVE_TO_CART } from "../Constant";
export default function CardItems(state=[],action){
     switch (action.type) {
      case ADD_TO_CART:
        console.log(action);
        return[
            ...state,
            {cardData:action.data}
        ]
       case REMOVE_TO_CART:
        console.log("Reducer",action)
        state.pop();
        return[
            ...state
        ]
        default:
            return state

}
}