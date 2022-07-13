import { legacy_createStore } from "redux";
import { rootReducer } from "./reducer";

export const store=legacy_createStore(rootReducer)