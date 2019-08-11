export interface Istate {
  // Fetching activity indicator

  fetching: boolean;

  // Fetched activity indicator

  fetched: boolean;

  // Error activity indicator

  onError: boolean;

  // Error message object

  error: object;

  // Arrays of coins

  coins: Array<any>;
}

export interface Iaction {
  //action type

  type: string;

  //action payload

  payload: any;
}
