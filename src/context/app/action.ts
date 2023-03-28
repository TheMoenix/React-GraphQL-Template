import { ISessionInfo } from "../../common/types";

export enum AppActions {
  SET_SESSION = "SET_SESSION",
}

export interface ISetSession {
  type: AppActions.SET_SESSION;
  session: string;
}

export function setSession(session: string) {
  return {
    type: AppActions.SET_SESSION,
    session,
  };
}

export type AppAction = ISetSession;
