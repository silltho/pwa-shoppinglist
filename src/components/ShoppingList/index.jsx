import React from 'react'
import ShoppingListItem from 'components/ShoppingListItem'
import ShoppingListForm from 'components/ShoppingListForm'
import firebase from 'config/firebase'

class ShoppingList extends React.PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      shoppingItems: {}
    }
  }

  componentDidMount() {
    firebase.on('value', (snap) => {
      console.log('shoppingItems', snap.val())
      this.setState({ shoppingItems: snap.val() })
    })
  }

  componentWillUnmount() {
    firebase.off('value', this.firebaseCallback)
  }

  renderItem = ([key, item]) => (
    <ShoppingListItem key={`item-${key}`} item={item} />
  )

  render() {
    const renderedShoppingItems = Object.entries(this.state.shoppingItems).map(
      this.renderItem
    )

    return (
      <div>
        <ShoppingListForm />
        <ol>{renderedShoppingItems}</ol>
      </div>
    )
  }
}

ShoppingList.propTypes = {}

export default ShoppingList
