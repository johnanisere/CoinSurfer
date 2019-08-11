import reducer, { initialState } from "../reducer";
import { GET_COINS } from "../constants/action-types";

describe("list reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, { type: "", payload: "" })).toEqual(initialState);
  });

  it(`should handle ${GET_COINS.pending}`, () => {
    expect(
      reducer(initialState, {
        type: GET_COINS.pending,
        payload: ""
      })
    ).toEqual({
      ...initialState,
      fetching: true
    });
  });

  it(`should handle ${GET_COINS.fulfilled}`, () => {
    expect(
      reducer(initialState, {
        type: GET_COINS.fulfilled,
        payload: { data: { data: ["hey!"] } }
      })
    ).toEqual({
      ...initialState,
      fetched: true,
      coins: ["hey!"]
    });
  });

  it(`should handle ${GET_COINS.rejected}`, () => {
    expect(
      reducer(initialState, {
        type: GET_COINS.rejected,
        payload: { data: { data: ["hey!"] } }
      })
    ).toEqual({
      ...initialState,
      onError: true,
      error: { data: { data: ["hey!"] } }
    });
  });
});
