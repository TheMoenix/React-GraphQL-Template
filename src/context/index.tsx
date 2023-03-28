import React from "react";
import { ProviderProps } from "../common/types";
import { AppProvider } from "./app/context";

export const MoenixProvider: React.FC<ProviderProps> = (
  props: ProviderProps
) => {
  return <AppProvider>{props.children}</AppProvider>;
};
