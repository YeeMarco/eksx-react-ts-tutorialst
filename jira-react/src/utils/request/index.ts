import qs from "qs";
import { getCookie } from "../cookies";

const baseUrl = process.env.APP_API_URL;

interface IConfig extends RequestInit {
  data?: object;
  token?: string;
}

export async function request(
  endpoint: string,
  { data, ...customConfig }: IConfig
) {
  let token = getCookie("token") || "";
  const config = {
    method: "GET",
    headers: {
      Authorization: token ? "dsfgrggdssa" : "",
      "Content-Type": data ? "application/json" : "",
    },
    ...customConfig,
  };
  if (config.method.toUpperCase() === "GET") {
    endpoint = `?=${qs.stringify(data)}`;
  } else {
    config.body = JSON.stringify(data || {});
  }
  return fetch(`${baseUrl}/${endpoint}`, config)
    .then(async (res: Response) => {
      let statusCode = res.status;
      if (statusCode !== 200) {
        if (res.ok) {
          return await res.json();
        }
      }
    })
    .catch((err) => {
        
    });
}
