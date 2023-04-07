import { ISessionInfo } from "../../common/types";

export enum AppActions {
  SET_SESSION = "SET_SESSION",
}

export interface ISetSession {
  type: AppActions.SET_SESSION;
  session: ISessionInfo;
}

export function setSession(session: ISessionInfo) {
  return {
    type: AppActions.SET_SESSION,
    session,
  };
}

export type AppAction = ISetSession;
