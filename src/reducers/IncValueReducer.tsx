let initialState = 0;

export const IncValueReducer = (state = initialState, action: IncReducerAC): number => {
    switch (action.type) {
        case 'INC': {
            // debugger
            let sum = action.incValue;
            sum++;
            state = sum
            return state
        }
        default:
            return state
    }
}

type  IncReducerAC = {
    type: string,
    incValue: number
}

export const IncReducerAC = (incValue: number) => {
    return {
        type: 'INC',
        incValue: incValue
    }
}