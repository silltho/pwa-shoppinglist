import React from 'react'
import PropTypes from 'prop-types'
import firebase from 'config/firebase'

class ShoppingListItem extends React.Component {
  onChange = (e) => {
    firebase.child(this.props.itemKey).update({
      description: this.props.item.description,
      done: e.target.checked
    })
  }

  render() {
    const { item } = this.props

    return (
      <li>
        <input
          type="checkbox"
          checked={item.done}
          readOnly
          onChange={this.onChange}
        />
        <span>{item.description}</span>
      </li>
    )
  }
}

ShoppingListItem.propTypes = {
  itemKey: PropTypes.string.isRequired,
  item: PropTypes.object.isRequired
}

export default ShoppingListItem
