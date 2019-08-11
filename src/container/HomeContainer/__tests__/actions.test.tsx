import { fetchCoin } from "../actions";
function setUp() {
  const dispatch = async (val: any) => {
    return await val;
  };
  return { dispatch };
}
describe("fetchCoinAction", () => {
  it("should call api and update coins state", done => {
    const httpService = {
      get: () =>
        Promise.resolve({
          data: "dummy data"
        })
    };
    const { dispatch } = setUp();

    const getSpy = jest.spyOn(httpService, "get");

    fetchCoin(httpService as any)(dispatch)
      .then(response => {
        expect(Object.keys(response)).toEqual(
          expect.arrayContaining(["type", "payload"])
        );
        done();
      })
      .catch(() => {
        fail("should not catch");
      });

    expect(getSpy).toBeCalledWith("/cryptocurrency/listings/latest");
    expect(getSpy).toBeCalledTimes(1);
  });
});
