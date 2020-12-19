let initialState = 0;

export const MaxReducer=(state=initialState,action:reducerACType):number=>{
    switch (action.type) {
        case 'MAX':{
            state = action.setmax;
            return state
        }
        default: return state
    }
}

type reducerACType={
    type:string
    setmax:number
}
export const MaxReducerAC = (setmax:number):reducerACType => {
    return {
        type: 'MAX',
        setmax:setmax
    }
}