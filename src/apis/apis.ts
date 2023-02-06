import axios from 'axios';



export const getMoviesApi = async (term: string): Promise<any> => {
  const defoptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
    mode: 'no-cors',
    params: { s: term, type: 'movie' },
  };

  try {
    const res = await axios.get(
      'http://www.omdbapi.com/?apikey=d8902cf1',
      defoptions
    );
    return res.data.Search;
  } catch (error) {}
};

export const getChoosenMovie = async (term: string): Promise<any> => {
  const defoptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
    mode: 'no-cors',
    params: { i: term, type: 'movie', plot: 'full' },
  };

  try {
    const res = await axios.get(
      'http://www.omdbapi.com/?apikey=d8902cf1',
      defoptions
    );
    return res.data;
  } catch (error) {}
};
