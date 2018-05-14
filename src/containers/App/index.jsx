import React from 'react'
import PropTypes from 'prop-types'
import ShoppingList from 'components/ShoppingList'

const defaultProps = {
  shoppingItems: [
    {
      desription: 'article1',
      done: false
    },
    {
      desription: 'article2',
      done: false
    },
    {
      desription: 'article3',
      done: false
    },
    {
      desription: 'article4',
      done: false
    }
  ]
}

class App extends React.Component {
  render() {
    return <ShoppingList {...defaultProps} />
  }
}

App.propTypes = {}

/*export const mapDispatchToProps = () => ({})

const mapStateToProps = () => ({})*/

export default App
