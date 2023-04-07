import { ReactNode } from "react";
export type PairValue = [number, string];

export type Dispatch<T> = (action: T) => void;
export type ProviderProps = {
  children: ReactNode;
};

export interface IContext {
  lang?: string;
  tz?: string;
}

export interface User {
  username: string;
  name: string;
  email: string;
  roll: string;
}

export interface ISessionInfo {
  _id: number;
  lastActivityAt: Date;
  status: string;
  User: string;
}

export interface IRoute {
  title: string;
  index?: boolean;
  path: string;
  icon?: ReactNode;
  showOnMenu?: boolean;
  component: JSX.Element;
}

export interface IChatItem {
  type: "text" | "attachment";
  time: string;
  username: string | undefined;
  email: string | undefined;
  data: any;
}
