import React, { Component } from 'react';
import './style.scss';
import Grid from '@mui/material/Grid';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { getMoviesApi } from '../../apis/apis';
import { getMoviesAction } from '../../store/action-creatores';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

type OwnProps = {
  getMoviesActionDis: (response: any[]) => any;
};

type OwnState = {
  searchTerm: string;
  errorMessege: string;
};

class Header extends Component<OwnProps, OwnState> {
  constructor(props: any) {
    super(props);

    this.state = {
      searchTerm: '',
      errorMessege: '',
    };
  }

  optionsHandleChange = (event: any) => {
    const moviesList = getMoviesApi(event.target.value);

    moviesList.then((response) => {
      this.props.getMoviesActionDis(response);
    });
  };

  searchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ searchTerm: event.target.value });
  };

  searchSubmit = (
    event:
      | React.FormEvent<HTMLFormElement>
      | undefined
      | React.MouseEvent<HTMLButtonElement>
  ) => {
    if (!this.state.searchTerm) {
      this.setState({ errorMessege: 'please insert valid movie' });
      return;
    }

    this.setState({ errorMessege: '' });

    event?.preventDefault();

    const moviesList = getMoviesApi(this.state.searchTerm);

    moviesList.then((response) => {
      this.props.getMoviesActionDis(response);
    });
  };

  render() {
    return (
      <div className="header-container">
        <Grid container spacing={2}>
          <Grid className="links-grid" item xs={4}>
            <div className="links-container">
              <ul>
                {' '}
                <Link to="/">
                  {' '}
                  <li className="REACTFLIX">REACTFLIX</li>{' '}
                </Link>{' '}
                <li>HOME</li>
                <li>ABOUT</li> <li>CONTACT-US</li>
              </ul>{' '}
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="form-container">
              <div className="form-control">
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Top Movies
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={this.state.searchTerm}
                    label="Top Movies"
                    onChange={this.optionsHandleChange}
                  >
                    <MenuItem value="godfather">Godfather</MenuItem>
                    <MenuItem value="citizen kane">Citizen Kane</MenuItem>
                    <MenuItem value="vertigo">Vertigo</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="text-container">
              <form onSubmit={this.searchSubmit} action="">
                <TextField
                  value={this.state.searchTerm}
                  onChange={this.searchChange}
                  helperText={this.state.errorMessege}
                  id="outlined-basic"
                  label="Search Movie"
                  variant="outlined"
                />
              </form>
              <Button
                onClick={this.searchSubmit}
                type="submit"
                className="searchbtn"
                variant="contained"
              >
                search
              </Button>
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = (state: OwnState) => {
  return { state };
};

export default connect(mapStateToProps, {
  getMoviesActionDis: getMoviesAction,
})(Header);
