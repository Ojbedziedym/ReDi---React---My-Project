import { apiKey } from "./apiKey";

export const catOptions = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    "x-api-key": apiKey,
  },
};
