import React from 'react'
import PropTypes from 'prop-types'
import FontAwesome from 'react-fontawesome'
import firebase from 'config/firebase'

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

    const inputName = `input-${this.props.itemKey}`

    return (
      <li>
        <input
          id={inputName}
          type="checkbox"
          readOnly
          checked={item.done}
          onClick={this.toggleDone}
        />
        <label htmlFor={inputName}>{item.description}</label>
        <FontAwesome name="trash" onClick={this.removeItem} />
      </li>
    )
  }
}

ShoppingListItem.propTypes = {
  itemKey: PropTypes.string.isRequired,
  item: PropTypes.object.isRequired
}

export default ShoppingListItem
