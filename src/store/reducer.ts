import { ActionType } from './action-constant';
import { ActionsTypes } from './action-types';

export type State = {
  moviesList?: any[] | undefined;
  choosenMovie?: object | undefined | { Plot: string };
};

const initalState = { moviesList: [], choosenMovie: {} };

const moviesReducer = (
  state: State = initalState,
  action: ActionsTypes
): any => {
  switch (action.type) {
    case ActionType.GET_MOVIES:
      return { ...state, moviesList: action.payload };

    case ActionType.CHOOSEN_MOVIE:
      return { ...state, choosenMovie: action.payload };

    default:
      return state;
  }
};

export default moviesReducer;
