import React, { Component } from "react";
import CountrySelect from "../CountrySelect/CountrySelect";
import "./App.css";
import 'typeface-roboto';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Navbar from '../Navbar/Navbar'
import Grid from '@material-ui/core/Grid';

const styles = {
  root: {
    width: '100%',
    maxWidth: 500,
  },
};

class App extends Component {


  render() {
    // declared for later styling of content
    // const { classes } = this.props;


    return (
      <div>
        <Navbar />
        <Grid container spacing={12}>
        <Grid item large>
          <CountrySelect />
        </Grid>

        </Grid>
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(App);