import React, { Component } from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import './style.scss';
import { CardActionArea } from '@mui/material';

type Movie = {
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
  imdbID: string;
};

type OwnProps = {
  movieItem: Movie;
};

class MovieCard extends Component<OwnProps> {
  constructor(props: OwnProps) {
    super(props);
  }

  render() {
    return (
      <div className="card-container">
        <Card className="card">
          <CardActionArea>
            <CardMedia
              component="img"
              height="300"
              image={this.props.movieItem.Poster}
              alt="green iguana"
            />
            <CardContent>
              <h2>{this.props.movieItem.Title}</h2>
              <p>{this.props.movieItem.Year}</p>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    );
  }
}

export default MovieCard;
