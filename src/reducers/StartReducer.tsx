import {AppRootStateType} from "../store/store";

let initialState = 0;

export const StartReducer = (state = initialState, action: reducerACType): number => {
    switch (action.type) {
        case 'START': {
            state = action.setnumber;
            return state

        }
        // case 'RESET': {
// return action.setnumber
//         }
        default:
            return state
    }
}

type reducerACType = {
    type: string
    setnumber: number
}
export const StartReducerAC = (setnumber: number): reducerACType => {
    return {
        type: 'START',
        setnumber: setnumber
    }
}
