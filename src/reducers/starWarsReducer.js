import {FAILURE_API, FETCHING_API, SUCCESS_API} from "../actions";

const initialState = {
  characters: [],
  fetching: false,
  error: null
};

export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_API:
        return {
          ...state,
          fetching: true,
        }
    case SUCCESS_API:
        const characters  = action.payload.results
        return {
          ...state,
          isLoading: false,
          fetching: false,
          errorMessage: null,
          characters: characters
        }
    case FAILURE_API:
        return {
          ...state,
          isLoading: false,
          errorMessage: action.payload.message,
        }
    default:
      return state;
  }
};
