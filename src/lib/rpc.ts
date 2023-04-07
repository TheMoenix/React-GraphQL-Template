import Axios, { AxiosRequestConfig } from "axios";
import { message } from "antd";
import { useAppContext } from "../context/app/context";

export const getUserSession = async (id) => {
  let url = window.location.origin;
  if (!url || !url.startsWith("http")) {
    throw new Error("Malformed Odoo URL");
  }

  const options: AxiosRequestConfig = {
    url: `${url}/api/session`,
    method: "GET",
    headers: {
      "x-session": id || (process.env.REACT_APP_SESSION_ID as string),
    },
    data: {
      jsonrpc: "2.0",
    },
  };

  try {
    const res = (await Axios(options)).data;
    if (res.error) {
      // eslint-disable-next-line no-throw-literal
      throw {
        error: res.error.data,
      };
    }
    return res;
  } catch (error) {
    message.error(error);
    return undefined;
  }
};
