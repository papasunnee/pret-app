import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import SwipeableViews from 'react-swipeable-views'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import TextField from '@material-ui/core/TextField'
import Select from '@material-ui/core/Select'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
import MenuItem from '@material-ui/core/MenuItem'
import Input from '@material-ui/core/Input'
import Typography from '@material-ui/core/Typography'


function TabContainer({ children, dir }) {
  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired,
};

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 500,
  },
});

class LoginContent extends React.Component {
  constructor(props){
      super(props) ;
      this.state = {
        value: 0,
        loginas: '',
        registeras: '',
        open: false,
      };
      this.handleChange = this.handleChange.bind(this) ;
      this.handleChange2 = this.handleChange2.bind(this) ;
      this.handleChangeIndex = this.handleChangeIndex.bind(this) ;
  }

  handleChange = (event, value) => {
      this.setState({ value });
  };
  
  handleChange2 = event => {
      this.setState({ [event.target.name]: event.target.value });
  };
  
  handleChangeIndex = index => {
    this.setState({ value: index });
  };
  
  render() {
    const { classes, theme } = this.props;
    
    return (
      <div className={classes.root}>
            <AppBar position="static" color="default">
                <Tabs
                    value={this.state.value}
                    onChange={this.handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    fullWidth
                >
                    <Tab label="Login" />
                    <Tab label="Signup" />
                </Tabs>
            </AppBar>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={this.state.value}
          onChangeIndex={this.handleChangeIndex}
        >
          <TabContainer dir={theme.direction}>
                <TextField
                    id="email"
                    fullWidth
                    label="Email"
                    className={classes.textField}
                    margin="normal"
                    />
                <TextField
                    id="password"
                    fullWidth
                    label="Password"
                    className={classes.textField}
                    margin="normal"
                    />
          </TabContainer>
          <TabContainer dir={theme.direction}>
                <TextField
                    id="firstname"
                    fullWidth
                    label="Firstname"
                    className={classes.textField}
                    margin="normal"
                    />
                <TextField
                    id="lastname"
                    fullWidth
                    label="Lastname"
                    className={classes.textField}
                    margin="normal"
                    />
                <TextField
                    id="email"
                    fullWidth
                    label="Email"
                    className={classes.textField}
                    margin="normal"
                    />
                <TextField
                    id="password"
                    fullWidth
                    label="Password"
                    className={classes.textField}
                    margin="normal"
                    />
                <TextField
                    id="password"
                    fullWidth
                    label="Confirm Password"
                    className={classes.textField}
                    margin="normal"
                    />
                <InputLabel htmlFor="age-simple">Register As</InputLabel>
                <Select
                    value={this.state.registeras}
                    onChange={this.handleChange2}
                    inputProps={{
                    name: 'registeras',
                    id: 'age-simple',
                    }}
                    fullWidth
                >
                    <MenuItem value={1}>Candidate</MenuItem>
                    <MenuItem value={2}>Employer</MenuItem>
                </Select>
          </TabContainer>
        </SwipeableViews>
        
      </div>
    );
  }
}

LoginContent.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(LoginContent);