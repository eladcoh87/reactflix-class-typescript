import React, { Component } from 'react';
import './app.scss';
import Header from './components/Header/Header';
import MoviesList from './components/MoviesList/MoviesList';
import { connect } from 'react-redux';
import { getMoviesAction } from './store/action-creatores';
import { getMoviesApi } from './apis/apis';
import { Route, Routes } from 'react-router-dom';
import MoviePage from './pages/MoviePage';

type OwnProps = {
  getMoviesActionDis: (response: any[]) => any;
};

class App extends Component<OwnProps> {
  constructor(props: OwnProps) {
    super(props);
  }

  componentDidMount(): void {
    const moviesList = getMoviesApi('batman');

    moviesList.then((response) => {
      this.props.getMoviesActionDis(response);
    });
  }

  render() {
    return (
      <div className="app-container">
        <Header />
        <Routes>
          <Route path="/" element={<MoviesList />} />
          <Route path="/movie/:id" element={<MoviePage />} />
        </Routes>
      </div>
    );
  }
}

type OwnState = {
  moviesList: object[];
  getMoviesActionDis: (response: any[]) => any;
};

const mapStateToProps = (state: OwnState) => {
  return { state };
};

export default connect(mapStateToProps, {
  getMoviesActionDis: getMoviesAction,
})(App);
