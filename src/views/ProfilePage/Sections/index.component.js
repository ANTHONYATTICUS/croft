import React, { Component } from 'react';
import axios from 'axios';
import TableData from './TableData';
import { Paper, Table, TableHead, TableCell, TableRow, TableBody } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';



const styles = theme => ({
  root: {
    width: '50%',
    marginTop: theme.spacing.unit * 3,

    overflowX: 'auto',
  },
  table: {
    minWidth: 500,
  },
});
class LandIndex extends Component {

  constructor(props) {
    super(props);
    this.state = { business: [] };
    this.delete = this.delete.bind(this);
  }
  delete = (e) => {
    const user = axios.get('http://localhost:8080/business/delete/' + this.props.obj._id)
       user.splice(1);
       this.setState({user:user})
    
    // .then(console.log('Deleted'))
      .catch(err => console.log(err))
  }

  componentDidMount() {
    axios.get('http://localhost:8080/business')
      .then(response => {
        this.setState({ business: response.data });
      })
      .catch(function (error) {
        console.log(error);
      })
  }
  delete(){
    axios.get('http://localhost:8080/business/delete/' + this.props.obj._id)
      .then(console.log('Deleted'))
      .catch(err => console.log(err))
  }
  tabRow() {
    return this.state.business.map((object, i) => {
      return <TableData obj={object} key={i}/>;
    });
  }

  render() {
    return (
    
      <div>
        <h3 align="center">Listings</h3>
        <Paper style={{ marginBottom: 200 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell align="left">Contact</TableCell>
                <TableCell align="left">City</TableCell>
                <TableCell align="left">Acres</TableCell>
      
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                {this.tabRow()}
              </TableRow>
            </TableBody>
          </Table>
        </Paper>
      </div>



    );
  }
}
LandIndex.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(LandIndex)