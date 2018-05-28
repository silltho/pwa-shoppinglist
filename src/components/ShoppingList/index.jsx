import React from 'react'
import ShoppingListItem from 'components/ShoppingListItem'
import ShoppingListForm from 'components/ShoppingListForm'
import { database } from 'config/firebase'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'

class ShoppingList extends React.PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      shoppingItems: {}
    }
  }

  componentDidMount() {
    this.firebaseCallback = database.on('value', (snap) => {
      this.setState({ shoppingItems: snap.val() })
    })
  }

  componentWillUnmount() {
    database.off('value', this.firebaseCallback)
  }

  renderItem = ([key, item]) => (
    <ShoppingListItem key={`item-${key}`} itemKey={key} item={item} />
  )

  render() {
    const renderedShoppingItems = Object.entries(this.state.shoppingItems).map(
      this.renderItem
    )

    return (
      <div>
        <ShoppingListForm />
        <Divider />
        <List>{renderedShoppingItems}</List>
      </div>
    )
  }
}

ShoppingList.propTypes = {}

export default ShoppingList
