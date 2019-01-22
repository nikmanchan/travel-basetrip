import React, { Component } from "react";
import { connect } from "react-redux";
import "./Navbar.css";
import "typeface-roboto";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
// Icon for future close all panels button
// import IconButton from "@material-ui/core/IconButton";
// import Close from "@material-ui/icons/Close";

const styles = {
  root: {
    flexGrow: 1,
    // backgroundColor: 'green'
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};

class Navbar extends Component {

    handleScrollTop = () => {
        document.documentElement.scrollTop = 0;
    }

  render() {
    const { classes } = this.props;

    const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#ff8f00'},

        secondary: {
            main: '#ff8f00',
        },
    },
    });

    return (
      <div className={classes.root}>
        <MuiThemeProvider theme={theme}>
            <AppBar position="fixed" color="primary">
            <Toolbar>
                <div className="navbarButtons">

                <Button onClick={this.handleScrollTop}>
                    <Typography
                    variant="h5"
                    color="inherit"
                    className={classes.grow}
                    >
                    <img src={require('./asugo.logo.png')} height="50px" width="100px" alt="" className="logo"></img> 
                    {/* <font color="white">Travel Advisory</font> */}
                    </Typography>
                </Button>

                {/* Future close all panels button */}

                {/* <Button color="inherit" >
                    <IconButton>
                    <Close />
                    </IconButton>
                </Button> */}

                </div>
            </Toolbar>
            </AppBar>
        </MuiThemeProvider>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  countryInfo: state.countryInfo
});

Navbar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(connect(mapStateToProps)(Navbar));
