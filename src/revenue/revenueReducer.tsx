export interface RevenueState {
  revenue: number;
}

export enum ActionTypes {
  ADD = "add",
  SET = "set",
}

export interface RevenueAction {
  type: ActionTypes;
  payload: number;
}

export const revenueReducer = (state: RevenueState, action: RevenueAction) => {
  switch (action.type) {
    case ActionTypes.ADD:
      return {
        ...state,
        revenue: state.revenue + action.payload,
      };
    case ActionTypes.SET:
      return {
        ...state,
        revenue: action.payload,
      };
  }
};
