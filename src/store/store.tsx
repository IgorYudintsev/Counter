import {combineReducers, createStore} from "redux";
import {StartReducer} from "../reducers/StartReducer";
import {MaxReducer} from "../reducers/MaxReducer";
import {IncValueReducer} from "../reducers/IncValueReducer";

let RootReducer=combineReducers({
    start:StartReducer,
    max:MaxReducer,
    incValue:IncValueReducer
})

export const store=createStore(RootReducer);
export type AppRootStateType=ReturnType<typeof RootReducer>