import React from 'react'
import ShoppingListItem from 'components/ShoppingListItem'
import ShoppingListForm from 'components/ShoppingListForm'
import firebase from 'config/firebase'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import Icon from 'assets/icon.png'

class ShoppingList extends React.PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      shoppingItems: {}
    }
  }

  componentDidMount() {
    this.firebaseCallback = firebase.on('value', (snap) => {
      this.setState({ shoppingItems: snap.val() })
      this.displayNotification(snap.val().description)
    })
  }

  componentWillUnmount() {
    firebase.off('value', this.firebaseCallback)
  }

  displayNotification = () => {
    if (Notification.permission === 'granted') {
      navigator.serviceWorker.getRegistration().then((reg) => {
        const options = {
          body: `Website ${window.location.href}`,
          icon: Icon,
          vibrate: [100, 50, 100],
          data: {
            dateOfArrival: Date.now(),
            primaryKey: 1
          }
        }
        reg.showNotification('New item Added to ShoppingList.', options)
      })
    }
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
