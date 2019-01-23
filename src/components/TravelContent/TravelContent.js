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

// jss styles
const styles = theme => ({
  card: {
    paddingBottom: "2vmin"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
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

             <Typography variant="h4" className="countryName">
                <b>{info.name}</b>
             </Typography>

             <Typography variant="h6" gutterBottom className="publishDate">
                    Published
                <br></br>
                {this.formatDate(info.publishedDate)}
              </Typography>

              {/* Advisory Status */}
              <ExpansionPanel>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography className={classes.heading}>
                    Advisory Status
                  </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Typography>{info.advisoryText}</Typography>
                </ExpansionPanelDetails>
              </ExpansionPanel>

              {/* Vaccination */}
              <ExpansionPanel>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography className={classes.heading}>
                    Vaccine Considerations
                  </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Typography component={"div"} variant={"body2"}>
                    {info.health.diseasesAndVaccinesInfo.Vaccines.map(
                      (data, index) => (
                        <p key={index}>
                          <strong>{data.category}</strong>: &nbsp;
                          <span>{data.description}</span>
                        </p>
                      )
                    )}
                  </Typography>
                </ExpansionPanelDetails>
              </ExpansionPanel>

              {/* Travel Requirements */}
              <ExpansionPanel>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography className={classes.heading}>
                    Travel Requirements
                  </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Typography component={"div"} variant={"body2"}>
                    {info.entryExitRequirement.requirementInfo.map(
                      (data, index) => (
                        <p key={index}>
                          <strong>{data.category}</strong>: &nbsp;
                          <span>{data.description}</span>
                        </p>
                      )
                    )}
                  </Typography>
                </ExpansionPanelDetails>
              </ExpansionPanel>

              {/* Climate */}
              <ExpansionPanel>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography className={classes.heading}>Climate</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  {!info.climate.climateInfo.length > 0 ? (
                    <p>N/A</p>
                  ) : (
                    <Typography component={"div"} variant={"body2"}>
                      {info.climate.climateInfo.map((data, index) => (
                        <p key={index}>
                          <strong>{data.category}</strong>: &nbsp;
                          <span>{data.description}</span>
                        </p>
                      ))}
                    </Typography>
                  )}
                </ExpansionPanelDetails>
              </ExpansionPanel>

              {/* Law and Culture */}
              <ExpansionPanel>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography className={classes.heading}>
                    Law and Culture
                  </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                {!info.lawAndCulture.lawAndCultureInfo.length > 0 ? (
                    <p>N/A</p>
                  ) : (
                    <Typography component={"div"} variant={"body2"}>
                      {info.lawAndCulture.lawAndCultureInfo.map((data, index) => (
                        <p key={index}>
                          <strong>{data.category}</strong>: &nbsp;
                          <span>{data.description}</span>
                        </p>
                      ))}
                    </Typography>
                  )}
                </ExpansionPanelDetails>
              </ExpansionPanel>

              {/* Safety */}
              <ExpansionPanel>
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
              </ExpansionPanel>
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
