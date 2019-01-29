import React, { Component } from "react";
import "./TravelContent.css";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

// jss styles
const styles = theme => ({
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
  },
  media: {
    height: "20vh"
  },
  card: {
    width: "40vh",
    height: "30vh",
    textAlign: "center"
  }
});

class TravelContent extends Component {
  formatDate = date => {
    let dateToFormat = new Date(date).toDateString();
    return dateToFormat;
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <div className="travelContainer">
          {this.props.countryInfo.map((info, index) => (
            <div key={index}>
              <Card className={classes.card} key={index}>
                <CardMedia
                  className={classes.media}
                  image={info.basic.flag.png}
                />
                <CardContent>
                  <Typography variant="h5">{info.basic.name.common}</Typography>
                </CardContent>
              </Card>

              {/* basics */}
              <ExpansionPanel>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography className={classes.heading}>
                    General Information
                  </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Typography component={"div"} variant={"body2"}>
                    <p>
                      <strong>Capital</strong>: &nbsp;
                      <span>{info.basic.capital.name}</span>
                    </p>
                    <p>
                      <strong>Language(s)</strong>: &nbsp;
                      {info.basic.languages.map(
                        (data, index) => (
                          <span key={index}>
                            {data.name} &nbsp;
                          </span>
                        )
                      )}
                    </p>
                    {info.basic.textual.sections.map(
                      (data,index) => (
                        <p key={index}>
                          {data.body}
                        </p>
                      )
                    )}

                  </Typography>
                </ExpansionPanelDetails>
              </ExpansionPanel>

              {/* Currency */}
              <ExpansionPanel>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography className={classes.heading}>
                    Currency
                  </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Typography component={"div"} variant={"body2"}>
                  {info.currency.textual.sections.map(
                      (data,index) => (
                        <p key={index}>
                          {data.body}
                        </p>
                      )
                    )}
                  </Typography>
                </ExpansionPanelDetails>
              </ExpansionPanel>

              {/* Driving */}
              <ExpansionPanel>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography className={classes.heading}>
                    Driving
                  </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Typography component={"div"} variant={"body2"}>
                  {info.driving.rules.textual.sections.map(
                      (data,index) => (
                        <p key={index}>
                          {data.body}
                        </p>
                      )
                    )}
                  </Typography>
                </ExpansionPanelDetails>
              </ExpansionPanel>

              {/* Electricity */}
              <ExpansionPanel>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography className={classes.heading}>
                    Electricity
                  </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Typography component={"div"} variant={"body2"}>
                  {info.electricity.textual.sections.map(
                      (data,index) => (
                        <p key={index}>
                          {data.body}
                        </p>
                      )
                    )}
                  </Typography>
                </ExpansionPanelDetails>
              </ExpansionPanel>

              {/* Safety */}
              {/* <ExpansionPanel>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography className={classes.heading}>
                    Safety Considerations
                  </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                {!info.safety.safetyInfo.length > 0 ? (
                    <p>N/A</p>
                  ) : (
                    <Typography component={"div"} variant={"body2"}>
                      {info.safety.safetyInfo.map((data, index) => (
                        <p key={index}>
                          <strong>{data.category}</strong>: &nbsp;
                          <span>{data.description}</span>
                        </p>
                      ))}
                    </Typography>
                  )}
                </ExpansionPanelDetails>
              </ExpansionPanel> */}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  countryInfo: state.countryInfo
});

// needed for jss styles
TravelContent.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(connect(mapStateToProps)(TravelContent));
