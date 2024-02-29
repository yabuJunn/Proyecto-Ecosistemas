import { ScreensTypes } from "../types/screens";
import { Action, Actions, AppState } from "../types/store";

export const reducer = (action: Action, currentState: AppState): AppState => {
  switch (action.type) {
    // case Actions.EXAMPLE_ACTION:
    //   return {
    //     ...currentState,
    //     screen: ScreensTypes.examplePage
    //   };
    default:
      return currentState;
  }
};
