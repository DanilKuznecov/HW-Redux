import { Increment } from "./userAction";
import { Dicrement } from "./userAction";
import { Reset } from "./userAction";


export const useReducer = (state = 0, action) => {
    switch (action.type) {
        case Increment:
            return state +1;
            break;
        case Dicrement:
            return state -1;
            break;
        case Reset:
            return state = 0;
            break;
        default:
            return state
            break
    }
}