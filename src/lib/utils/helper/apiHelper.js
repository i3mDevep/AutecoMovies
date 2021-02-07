export const initialState = {
  isLoading: false,
  hasError: false,
  message: null,
};

export const apiReducer = (state, action) => {
  switch (action.type) {
    case "SUCCESS_API": {
      return {
        ...state,
        isLoading: false,
        hasError: false,
        message: action.payload,
      };
    }
    case "ERROR_API": {
      return {
        ...state,
        isLoading: false,
        hasError: true,
        message: action.payload,
      };
    }
    case "REQUESTED_API": {
      return {
        ...state,
        isLoading: true,
      };
    }
    case "RESET_STATE": {
      return { ...initialState };
    }
    default:
      return state;
  }
};
