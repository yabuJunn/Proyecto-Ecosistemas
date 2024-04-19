import { ScreensTypes } from "../types/screens";
import { Action, Actions, AppState } from "../types/store";

export const reducer = (action: Action, currentState: AppState): AppState => {
  switch (action.type) {
    case Actions.CHANGE_SCREEN:
      return {
        ...currentState,
        screen: action.payload
      };
    case Actions.UPDATE_ROOM_ID:
      return {
        ...currentState,
        roomId: action.payload
      };
    default:
      return currentState;
  }
};
