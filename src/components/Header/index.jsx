import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

class Header extends React.Component {
  render() {
    return (
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography variant="title" color="inherit">
            ShoppingList
          </Typography>
          <Button variant="outlined"> SUBSCRIBE</Button>
        </Toolbar>
      </AppBar>
    )
  }
}

Header.propTypes = {}

export default Header
