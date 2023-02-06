import React, { Component } from 'react';
import { connect } from 'react-redux';
import { State } from '../store/reducer';
import { getChoosenMovie } from '../apis/apis';
import { useParams } from 'react-router-dom';
import { choosenMovieACTION } from '../store/action-creatores';

import './style.scss';

function withParams(Component: any) {
  return (props: any) => <Component {...props} params={useParams()} />;
}

type OwnProps = {
  params: { id: string };
  choosenMovieACTIONDIS: (data: object) => void;
  state: any;
};

class MoviePage extends Component<OwnProps> {
  componentDidMount(): void {
    let { id } = this.props.params;
      
    const choosenMovie = getChoosenMovie(id);

    choosenMovie.then((data) => this.props.choosenMovieACTIONDIS(data));
  }

  componentWillUnmount(): void {
    this.props.choosenMovieACTIONDIS({});
  }

  render() {
    return (
      <div className="movie-page-container">
        <div className="imagecontainer">
          <img src={this.props.state.choosenMovie.Poster} alt="" />
        </div>

        <div className="description">
          <h3>{this.props.state.choosenMovie.Title}</h3>
          <h5>{this.props.state.choosenMovie.Year}</h5>
          {this.props.state.choosenMovie.Plot}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: State) => {
  return { state };
};
export default connect(mapStateToProps, {
  choosenMovieACTIONDIS: choosenMovieACTION,
})(withParams(MoviePage));
