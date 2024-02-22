import { ScreensTypes } from "../types/screens";
import { Action, AppState, Observer } from "../types/store";
import { reducer } from "./reducer";

const observers: Observer[] = [];

export let state: AppState = {
    screen: ScreensTypes.examplePage,
    logedUser: {
        name: "Juan",
        password: "dajuan05"
    }
};

export const dispatch = (action: Action) => {
    const clone = JSON.parse(JSON.stringify(state));
    state = reducer(action, clone);
    observers.forEach((o) => o.render());
    console.log(state)
};

export const addObserver = (observer: Observer) => {
    observers.push(observer);
};
