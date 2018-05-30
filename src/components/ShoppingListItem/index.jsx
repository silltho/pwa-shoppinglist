import React from 'react'
import PropTypes from 'prop-types'
import FontAwesome from 'react-fontawesome'
import firebase from 'config/firebase'
import { displayNotification } from 'services/notification'
import ListItem from '@material-ui/core/ListItem'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import ListItemText from '@material-ui/core/ListItemText'
import Checkbox from '@material-ui/core/Checkbox'
import IconButton from '@material-ui/core/IconButton'

class ShoppingListItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      item: {}
    }
  }

  componentDidMount() {
    this.firebaseCallback = firebase
      .child(this.props.itemKey)
      .on('value', (snap) => {
        this.setState({ item: snap.val() })
        if (snap.val() === null) {
          return displayNotification(
            'Item removed',
            this.state.item.description
          )
        }
        if (snap.val().done && !this.state.item.done) {
          return displayNotification(
            'Item checked',
            this.state.item.description
          )
        }
        if (!snap.val().done && this.state.item.done) {
          return displayNotification(
            'Item unchecked',
            this.state.item.description
          )
        }
        return true
      })
  }

  componentWillUnmount() {
    firebase.off('value', this.firebaseCallback)
  }

  toggleDone = () => {
    firebase.child(this.props.itemKey).update({
      description: this.state.item.description,
      done: !this.state.item.done
    })
  }

  removeItem = () => {
    firebase.child(this.props.itemKey).remove()
  }

  render() {
    const { item } = this.state

    return (
      <ListItem role={undefined} dense button onClick={this.toggleDone}>
        <Checkbox checked={item.done} tabIndex={-1} disableRipple />
        <ListItemText primary={item.description} />
        <ListItemSecondaryAction>
          <IconButton aria-label="Remove">
            <FontAwesome name="trash" onClick={this.removeItem} />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    )
  }
}

ShoppingListItem.propTypes = {
  itemKey: PropTypes.string.isRequired
}

export default ShoppingListItem
