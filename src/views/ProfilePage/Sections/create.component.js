import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  dense: {
    marginTop: 16,
  },
  menu: {
    width: 200,
  },
  dense: {
    marginTop: 16,
  },
  menu: {
    width: 200,
  },
});



class Create extends Component {
  constructor(props) {
    super(props);
    this.onChangePersonName = this.onChangePersonName.bind(this);
    this.onChangeBusinessName = this.onChangeBusinessName.bind(this);
    this.onChangeGstNumber = this.onChangeGstNumber.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      person_name: '',
      business_name: '',
      business_gst_number: ''
    }
  }
  onChangePersonName(e) {
    this.setState({
      person_name: e.target.value
    });
  }
  onChangeBusinessName(e) {
    this.setState({
      business_name: e.target.value
    })
  }
  onChangeGstNumber(e) {
    this.setState({
      business_gst_number: e.target.value
    })
  }


  onSubmit = (e) => {
    e.preventDefault()
    const { person_name, business_name, business_gst_number } = this.state;
    axios.post("http://localhost:8080/business/add", {
      person_name: person_name,
      business_gst_number: business_gst_number,
      business_name: business_name
    })
      .then(res => console.log(res.data));
    this.setState({
      person_name: '',
      business_name: '',
      business_gst_number: ''
    })
    window.location = "/profile-page"
  }

  render() {
    const { classes } = this.props;
    return (



      <form onSubmit={this.onSubmit} className={classes.container} noValidate autoComplete="off">
        <div>
          <TextField
            id="outlined-name"
            label="Email"
            className={classes.textField}
            value={this.state.person_name}
            onChange={this.onChangePersonName}
            margin="normal"
            variant="outlined"
          />
        </div>
        <div>
          <TextField
            id="outlined-name"
            label="City"
            className={classes.textField}
            value={this.state.business_name}
            onChange={this.onChangeBusinessName}
            margin="normal"
            variant="outlined"
          />
        </div>
        <div>
          <TextField
            id="outlined-name"
            label="Acres"
            className={classes.textField}
            value={this.state.business_gst_number}
            onChange={this.onChangeGstNumber}
            margin="normal"
            variant="outlined"
          />

        </div>
        <div>
          {/* <Button className={classes.button}>SUBMIT</Button> */}
        </div>

        <div>
          <Button type="submit" value="Submit" className={classes.button}>Submit</Button>
        </div>

      </form>

    );
  }
}
Create.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(Create)