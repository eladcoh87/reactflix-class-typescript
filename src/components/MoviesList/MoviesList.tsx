import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../MovieCard/MovieCard';
import Grid from '@mui/material/Grid';
import './style.scss';
import { connect } from 'react-redux';
import { State } from '../../store/reducer';

type OwnProps = {
  state: State;
};

class MoviesList extends Component<OwnProps> {
  constructor(props: OwnProps) {
    super(props);
  }

  renderList = () => {
    const MoviesList = this.props.state.moviesList?.map((movie) => {
      return (
        <Grid key={movie.imdbID} item xs={2.3}>
          <Link to={`/movie/${movie.imdbID}`}>
            <MovieCard movieItem={movie} />
          </Link>
        </Grid>
      );
    });

    return MoviesList;
  };

  render() {
    return (
      <div className="MovieListContainer">
        <Grid container justifyContent="space-around" spacing={2}>
          {this.renderList()}
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = (state: State) => {
  return { state };
};
export default connect(mapStateToProps)(MoviesList);
