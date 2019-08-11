import request from "../../request";
import { GET_COINS } from "./constants/action-types";

export function getCoins(payload: Promise<any>) {
  return {
    type: GET_COINS.default,
    payload
  };
}

export function fetchCoin(httpService: typeof request) {
  const payload = httpService.get("/cryptocurrency/listings/latest");
  return async dispatch => {
    return dispatch(getCoins(payload));
  };
}
