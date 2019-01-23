import React, { Component } from "react";
import "./CountrySelect.css";
import axios from "axios";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import TravelContent from "../TravelContent/TravelContent";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const styles = theme => ({
  container: {},
  root: {},
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2
  },
  button: {
    margin: theme.spacing.unit
  }
});

class CountrySelect extends Component {
  state = {
    country: "",
    advisoryState: "",
    countryInfo: [],
    vaccines: [],
    climate: "",
    publishedDate: "",
    recentUpdates: ""
  };

  handleSelect = event => {
    event.preventDefault();
    axios
      .get(
        `https://api.tugo.com/v1/travelsafe/countries/${this.state.country}`,
        {
          headers: {
            "X-Auth-API-Key": "pzxtdae4ap3rd4sswp6uhdk2",
            "Access-Control-Allow-Origin": "*"
          }
        }
      )
      .then(response =>
        this.props.dispatch({
          type: "CHOOSE_COUNTRY",
          payload: response.data
        })
      );
  };

  handleChange = property => event => {
    this.setState({
      [property]: event.target.value
    });
  };

  render() {
    const { classes } = this.props;

    const theme = createMuiTheme({
      palette: {
        primary: {
          main: "#0d47a1"
        },

        secondary: {
          main: "#1a237e"
        }
      }
    });

    return (
      <div className="countrySelectComponent">
        <MuiThemeProvider theme={theme}>
          <form className={classes.root} autoComplete="off">
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="age-simple">Countries</InputLabel>
              <Select
                value={this.state.country}
                onChange={this.handleChange("country")}
                className="countrySelect"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="ID">Indonesia</MenuItem>
                <MenuItem value="TH">Thailand</MenuItem>
                <MenuItem value="PH">Phillippines</MenuItem>
                <MenuItem value="IN">India</MenuItem>
                <MenuItem value="JP">Japan</MenuItem>
                <MenuItem value="HK">Hong Kong</MenuItem>
                <MenuItem value="AU">Australia</MenuItem>
                <MenuItem value="NZ">New Zealand</MenuItem>
                <MenuItem value="GB">United Kingdom</MenuItem>
                <MenuItem value="IE">Ireland</MenuItem>
                <MenuItem value="IS">Iceland</MenuItem>
                <MenuItem value="PT">Portugal</MenuItem>
                <MenuItem value="ES">Spain</MenuItem>
                <MenuItem value="GR">Greece</MenuItem>
                <MenuItem value="IT">Italy</MenuItem>
                <MenuItem value="DE">Germany</MenuItem>
                {/* <MenuItem value='CA'>Canada</MenuItem> */}
                <MenuItem value="MX">Mexico</MenuItem>
              </Select>
              <FormHelperText>Choose a country</FormHelperText>
              <Button
                variant="contained"
                color="secondary"
                onClick={this.handleSelect}
                className={classes.button}
                styles={{ display: "inline" }}
              >
                Select
              </Button>
            </FormControl>
          </form>
          {!this.props.countryInfo.length ? null : <TravelContent />}
        </MuiThemeProvider>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  countryInfo: state.countryInfo
});

// needed for jss styles
CountrySelect.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(connect(mapStateToProps)(CountrySelect));
