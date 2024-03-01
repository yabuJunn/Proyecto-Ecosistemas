import { Action, Actions } from "../types/store";

export const changeScreen = (payload: string, reload: boolean): Action => ({
  type: Actions.CHANGE_SCREEN,
  payload,
  reload
});
