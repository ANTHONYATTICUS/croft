
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { TableCell, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 500,
  },
});

class TableData extends Component {

  constructor(props) {
    super(props);
    this.state = { business: [] };
    this.delete = this.delete.bind(this);
  }

  delete() {
    axios.get('http://localhost:8080/business/delete/'+this.props.obj._id)
        .then(console.log('Deleted'))
        .catch(err => console.log(err))
        window.location = "/profile-page"
}

  render() {
    return (
      <div style={{margin:8}}>
          

        
          
              <TableCell >{this.props.obj.person_name}</TableCell>
              <TableCell >{this.props.obj.business_name}</TableCell>
              <TableCell >{this.props.obj.business_gst_number}</TableCell>

              <TableCell >
                <Link to={"/edit/" + this.props.obj._id}>Edit</Link>
              </TableCell>
              <TableCell>
                <Button onClick={this.delete}>Delete</Button>
              </TableCell>
           
  


      </div>

    );
  }
}
TableData.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TableData);
