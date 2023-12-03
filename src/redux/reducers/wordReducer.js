import { ADD_WORD } from "../actions/actionTypes";


const initialState = [] 
const wordReducer=(state=initialState,action)=>{
 if(action.type==ADD_WORD){
    return [...state,action.payload];
 }else{
    return state;
 }

}
export default wordReducer;