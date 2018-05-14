import React from 'react'
import PropTypes from 'prop-types'

class ShoppingListItem extends React.Component {
  render() {
    const { item } = this.props

    return (
      <li>
        <input type="checkbox" checked={item.done} readOnly />
        <span>{item.description}</span>
      </li>
    )
  }
}

ShoppingListItem.propTypes = {
  item: PropTypes.object.isRequired
}

export default ShoppingListItem
