import { GET_COINS } from "./constants/action-types";
import { Istate, Iaction } from "./constants/state.Interface";

export const initialState: Istate = {
  fetching: false,
  fetched: false,
  onError: false,
  error: {},
  coins: []
};

export default function(state: Istate = initialState, action: Iaction) {
  switch (action.type) {
    case GET_COINS.pending: {
      return {
        ...state,
        fetching: true,
        fetched: false,
        onError: false,
        error: {}
      };
    }
    case GET_COINS.fulfilled: {
      return {
        ...state,
        fetching: false,
        fetched: true,
        error: {},
        coins: action.payload.data.data
      };
    }
    case GET_COINS.rejected: {
      return {
        ...state,
        fetching: false,
        fetched: false,
        onError: true,
        error: action.payload
      };
    }
    default: {
      return {
        ...state
      };
    }
  }
}
