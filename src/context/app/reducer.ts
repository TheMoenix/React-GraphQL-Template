import { AppAction, AppActions } from "./action";

import { ISessionInfo } from "../../common/types";

export interface IAppState {
  sessionInfo: string | undefined;
}

export const initialAppState: IAppState = {
  sessionInfo: undefined,
};

export const appReducer = (state: IAppState, action: AppAction) => {
  switch (action.type) {
    case AppActions.SET_SESSION:
      return {
        sessionInfo: action.session,
      };
    default:
      return {
        ...state,
      };
  }
};
