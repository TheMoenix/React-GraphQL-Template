import { ReactNode } from "react";
export type PairValue = [number, string];

export type Dispatch<T> = (action: T) => void;
export type ProviderProps = {
  children: ReactNode;
};

export interface IContext {
  lang?: string;
  tz?: string;
  allowed_company_ids?: number[];
  user_id?: number;
}

export interface ISessionInfo {
  uid: number;
  user_context: IContext;
  name: string;
  username: string;
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
