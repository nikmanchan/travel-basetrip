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
import Radio from "@material-ui/core/Radio";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
import RadioButtonCheckedIcon from "@material-ui/icons/RadioButtonChecked";
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

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
  },
  checked: {}
});

class CountrySelect extends Component {
  state = {
    country: "",
    advisoryState: "",
    countryInfo: [],
    vaccines: [],
    climate: "",
    publishedDate: "",
    recentUpdates: "",
    selectedValue: ""
  };

  handleSelect = event => {
    event.preventDefault();
    axios
      .get(`https://api.thebasetrip.com/v3/countries/${this.state.country}`, {
        headers: {
          "x-api-key":
            "i9mnaaokg04er2pt83j8mfufn4pwlilw98jhy7ct1te2m0jkj3miaozqt1pg"
        }
      })
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

  handleCheckboxChange = event => {
    this.setState({ selectedValue: event.target.value });
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
          <Radio
            checked={this.state.selectedValue === "a"}
            onChange={this.handleCheckboxChange}
            value="a"
            name="selectCountries"
            aria-label="A"
          />
          <Radio
            checked={this.state.selectedValue === "b"}
            onChange={this.handleCheckboxChange}
            value="b"
            name="selectCities"
            aria-label="B"
          />

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
                {/* <MenuItem value="ID">Indonesia</MenuItem>
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
                <MenuItem value="ES">Spain</MenuItem> */}
                <MenuItem value="US">United States</MenuItem>
                <MenuItem value="CH">Switzerland</MenuItem>
                <MenuItem value="FR">France</MenuItem>
                <MenuItem value="HR">Croatia</MenuItem>
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
