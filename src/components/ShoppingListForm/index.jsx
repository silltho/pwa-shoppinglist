import React from 'react'
import styled from 'styled-components'
import firebase from 'config/firebase'
import TextField from '@material-ui/core/TextField'
import IconButton from '@material-ui/core/IconButton'
import Grid from '@material-ui/core/Grid'
import FontAwesome from 'react-fontawesome'
import webpush from 'web-push'
import VAPID_KEYS from 'config/vapid'

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

  pushNofication = () => {
    webpush.setGCMAPIKey(332598307602)
    webpush.setVapidDetails(
      'mailto:pobermueller.mmt-b2015@fh-salzburg.ac.at',
      VAPID_KEYS.keys.p256dh,
      VAPID_KEYS.keys.auth
    )

    // This is the same output of calling JSON.stringify on a PushSubscription
    const pushSubscription = {
      endpoint: 'https://fcm.googleapis.com/fcm/send/',
      keys: {
        auth: VAPID_KEYS.keys.auth,
        p256dh: VAPID_KEYS.keys.p256dh
      }
    }

    webpush.sendNotification(pushSubscription, 'Your Push Payload Text')
  }

  onFormSubmit = (e) => {
    e.preventDefault()
    firebase.push({
      description: this.state.newItemDesc,
      done: false
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
