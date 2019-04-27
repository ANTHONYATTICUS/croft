import React, { Component } from 'react';
import axios from 'axios';
import Header from '../../../components/Header/Header'
import HeaderLinks from '../../../components/Header/HeaderLinks'
import Paper from '@material-ui/core/Paper'
import { TextField, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

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
    width: 500,
  },
  dense: {
    marginTop: 16,
  },
  menu: {
    width: 500,
  },
});


class Edit extends Component {
  constructor(props) {
    super(props);
    this.onChangePersonName = this.onChangePersonName.bind(this);
    this.onChangeBusinessName = this.onChangeBusinessName.bind(this);
    this.onChangeGstNumber = this.onChangeGstNumber.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      person_name: '',
      business_name: '',
      business_gst_number:''
    }
  }

  componentDidMount() {
      axios.get('http://localhost:8080/business/edit/'+this.props.match.params.id)
          .then(response => {
              this.setState({ 
                person_name: response.data.person_name, 
                business_name: response.data.business_name,
                business_gst_number: response.data.business_gst_number });
          })
          .catch(function (error) {
              console.log(error);
          })
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

  onSubmit(e) {
    e.preventDefault();
    const obj = {
      person_name: this.state.person_name,
      business_name: this.state.business_name,
      business_gst_number: this.state.business_gst_number
    };
    axios.post('http://localhost:8080/business/update/'+this.props.match.params.id, obj)
        .then(res => console.log(res.data));
          this.props.history.push('/index');
          window.location = "/profile-page"

  }
 
  render() {
    const { classes } = this.props;
    return (
        <div align="center" className="container" style={{ marginTop: 10 }}>
         <Header
          color="transparent"
          brand="Croft"
          links={<HeaderLinks dropdownHoverColor="info" />}
          fixed
          changeColorOnScroll={{
            height: 300,
            color: "info"
          }}
        
        />
            <h3 align="center">Update Property Information</h3>
            <Paper  className="w-50 mt-5" onSubmit={this.onSubmit}>
                <div className="form-group">
                <br/>
                    <TextField 
                     id="outlined-name"
                     label="Email"
                     className={classes.textField}
                      value={this.state.person_name}
                      onChange={this.onChangePersonName}
                      />
                </div>
                
                <div className="form-group">
                    
                    <TextField
                    id="outlined-name"
                     label="city"
                     className={classes.textField}
                      value={this.state.business_name}
                      onChange={this.onChangeBusinessName}
                      />
                </div>
                <div className="form-group">
                    <TextField 
                    id="outlined-name"
                    label="city"
                    className={classes.textField}  value={this.state.business_gst_number}
                      onChange={this.onChangeGstNumber}
                      />
                </div>
                
                <div className="form-group">
                <Button type="submit" value="Submit" className={classes.button}>Submit</Button>
                <br/>
                <br/>
                </div>
            </Paper>
        </div>
    )
  }
}
Edit.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(Edit)