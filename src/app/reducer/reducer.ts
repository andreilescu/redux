import {Action, ActionReducer, ActionReducerMap, MetaReducer} from "@ngrx/store";
import {ADD_TO_WISHLIST, RESET_WISHLIST, WishlistActions} from "../actions/actions";
import {environment} from "../../environments/environment.prod";

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const RESET = 'RESET';

export function incrementReducer(state: number = 0, action: Action) {

  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    case RESET:
      return 0;

    default:
      return state;
  }
}

function wishlistReducer(state: any[] = [], action: WishlistActions) {
  switch (action.type) {

    case ADD_TO_WISHLIST:
      return [
        ...state,
        {
          text: action.payload
        }
      ];
    case RESET_WISHLIST:
      return [];

    default:
      return state;
  }
}

function logger(reducer: ActionReducer<AppState>): ActionReducer<AppState> {
  return function(state: AppState, action: any) {
    console.log('state', state);
    console.log('action', action);

    return reducer(state, action);
  }
}

export const reducers: ActionReducerMap<AppState> = {
  counter: incrementReducer,
  wishlistItems: wishlistReducer
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production
  ? [logger]
  : [];

