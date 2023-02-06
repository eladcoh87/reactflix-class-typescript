import { ActionType } from './action-constant';

type GetMoviesActionType = {
  type: ActionType.GET_MOVIES;
  payload: any[];
};

type ChoosenMovieActionType = {
  type: ActionType.CHOOSEN_MOVIE;
  payload: object;
};

export type ActionsTypes = GetMoviesActionType | ChoosenMovieActionType;
