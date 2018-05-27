import React from 'react'
import styled from 'styled-components'
import firebase from 'config/firebase'
import TextField from '@material-ui/core/TextField'
import IconButton from '@material-ui/core/IconButton'
import Grid from '@material-ui/core/Grid'
import FontAwesome from 'react-fontawesome'
import ShoppingIcon from 'assets/icon.png'

const Wrapper = styled(Grid)`
  margin-top: 1rem !important;
`

class ShoppingListForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      newItemDesc: ''
    }
  }

  onInputChange = (e) => {
    this.setState({
      newItemDesc: e.target.value
    })
  }

  onFormSubmit = (e) => {
    e.preventDefault()
    firebase.push({
      description: this.state.newItemDesc,
      done: false
    })

    navigator.serviceWorker.getRegistration().then((reg) => {
      const options = {
        body: 'New Item Added',
        icon: 'assets/icon.png',
        vibrate: [100, 50, 100],
        data: {
          description: this.state.newItemDesc,
          done: false
        }
      }

      reg.showNotification('ITEM ADDED', options)
    })

    this.setState({ newItemDesc: '' })
  }

  render() {
    return (
      <Wrapper container spacing={8} alignItems="baseline" justify="center">
        <Grid item xs={10}>
          <TextField
            id="description"
            label="Description"
            onChange={this.onInputChange}
            value={this.state.newItemDesc}
            fullWidth
          />
        </Grid>
        <Grid container item xs={2} justify="flex-end">
          <IconButton aria-label="Add" onClick={this.onFormSubmit}>
            <FontAwesome name="plus" />
          </IconButton>
        </Grid>
      </Wrapper>
    )
  }
}

ShoppingListForm.propTypes = {}

export default ShoppingListForm
