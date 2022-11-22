export interface RevenueState {
  revenue: number;
}

export interface RevenueAction {
  payload: number;
}

export const revenueReducer = (state: RevenueState, action: RevenueAction) => {
  return {
    ...state,
    revenue: state.revenue + action.payload,
  };
};
