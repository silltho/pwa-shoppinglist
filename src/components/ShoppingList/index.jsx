import React from 'react'
import PropTypes from 'prop-types'
import ShoppingListItem from 'components/ShoppingListItem'

class ShoppingList extends React.PureComponent {
  renderItem = (item, index) => (
    <ShoppingListItem key={`item-${index}`} item={item} />
  )

  render() {
    const renderedShoppingItems = this.props.shoppingItems.map(this.renderItem)

    return <ul>{renderedShoppingItems}</ul>
  }
}

ShoppingList.propTypes = {
  shoppingItems: PropTypes.array.isRequired
}

export default ShoppingList
