import React from 'react'
import PropTypes from 'prop-types'
import ShoppingList from 'components/ShoppingList'

const defaultProps = {
  shoppingItems: [
    {
      description: 'article1',
      done: false
    },
    {
      description: 'article2',
      done: false
    },
    {
      description: 'article3',
      done: false
    },
    {
      description: 'article4',
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
