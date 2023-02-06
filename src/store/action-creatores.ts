import { ActionType } from './action-constant';

export const getMoviesAction = (movieList: any[]) => {
  return {
    type: ActionType.GET_MOVIES,
    payload: movieList,
  };
};

export const choosenMovieACTION = (choosenMovie: object) => {
  return {
    type: ActionType.CHOOSEN_MOVIE,
    payload: choosenMovie,
  };
};
