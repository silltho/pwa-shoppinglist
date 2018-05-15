import React from 'react'
import PropTypes from 'prop-types'
import FontAwesome from 'react-fontawesome'
import firebase from 'config/firebase'
import ListItem from '@material-ui/core/ListItem'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import ListItemText from '@material-ui/core/ListItemText'
import Checkbox from '@material-ui/core/Checkbox'
import IconButton from '@material-ui/core/IconButton'

class ShoppingListItem extends React.Component {
  toggleDone = () => {
    firebase.child(this.props.itemKey).update({
      description: this.props.item.description,
      done: !this.props.item.done
    })
  }

  removeItem = () => {
    firebase.child(this.props.itemKey).remove()
  }

  render() {
    const { item } = this.props

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
  itemKey: PropTypes.string.isRequired,
  item: PropTypes.object.isRequired
}

export default ShoppingListItem
