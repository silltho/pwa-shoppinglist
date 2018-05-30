import React from 'react'
import ShoppingListItem from 'components/ShoppingListItem'
import ShoppingListForm from 'components/ShoppingListForm'
import firebase from 'config/firebase'
import { displayNotification } from 'services/notification'
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
    this.firebaseCallback = firebase.on('value', (snap) => {
      const keys = Object.keys(snap.val())
      const last = snap.val()[keys[keys.length - 1]]
      if (
        Object.keys(this.state.shoppingItems).length <
        Object.keys(snap.val()).length
      ) {
        displayNotification('New Item', last.description)
      }
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
