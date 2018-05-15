import React from 'react'
import Header from 'components/Header'
import ShoppingList from 'components/ShoppingList'

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <ShoppingList />
      </React.Fragment>
    )
  }
}

App.propTypes = {}

export default App
