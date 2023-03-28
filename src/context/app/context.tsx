import React, { Reducer, useContext } from "react";
import { createContext, useReducer } from "react";
import { Dispatch, ProviderProps } from "../../common/types";
import { appReducer, IAppState, initialAppState } from "./reducer";
import { AppAction } from "./action";

const AppContext = createContext<
  { state: IAppState; dispatch: Dispatch<AppAction> } | undefined
>(undefined);

export const AppProvider: React.FC<ProviderProps> = (props: ProviderProps) => {
  const [state, dispatch] = useReducer<Reducer<IAppState, AppAction>>(
    appReducer,
    initialAppState
  );
  const value = { state, dispatch };
  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};

export function useAppContext() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppContext must be used within a AppProvider");
  }
  return context;
}
