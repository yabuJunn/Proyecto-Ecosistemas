import { ScreensTypes } from "./screens";

export type Observer = HTMLElement & { render: () => void };

export interface Action {
  type: Actions;
  payload: any,
  reload: boolean
}

export enum Actions {
  "CHANGE_SCREEN" = "CHANGE_SCREEN",
}

export interface AppState {
  screen: ScreensTypes
  insideUser: user | undefined
  outsideUser: user | undefined
  sessionClothes: Array<clothes>,
  userId: string
}

interface user {
  id: string,
  name: string
}

interface clothes {
  name: string,
  id: string,
  image: string
}