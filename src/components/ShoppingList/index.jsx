import React from 'react'
import PropTypes from 'prop-types'
import ShoppingListItem from 'components/ShoppingListItem'
import ShoppingListForm from 'components/ShoppingListForm'

class ShoppingList extends React.PureComponent {
  renderItem = (item, index) => (
    <ShoppingListItem key={`item-${index}`} item={item} />
  )

  render() {
    const renderedShoppingItems = this.props.shoppingItems.map(this.renderItem)

    return (
      <div>
        <ShoppingListForm />
        <ol>{renderedShoppingItems}</ol>
      </div>
    )
  }
}

ShoppingList.propTypes = {
  shoppingItems: PropTypes.array.isRequired
}

export default ShoppingList
