import Axios, { AxiosRequestConfig } from "axios";
import { message } from "antd";

export const getUserSession = async () => {
  let url = window.location.origin;
  if (!url || !url.startsWith("http")) {
    throw new Error("Malformed Odoo URL");
  }
  console.log(url);

  const options: AxiosRequestConfig = {
    url: `${url}/session`,
    method: "GET",
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
