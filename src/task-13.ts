type Action = "increment" | "decrement";

function reducer(state: number, action: { type: Action }): number {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    default:
      return state;
  }
}
