import { Action, Actions } from "../types/store";

export const exampleAction = (payload: string): Action => ({
  type: Actions.EXAMPLE_ACTION,
  payload,
});
