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
      done: true
    },
    {
      description: 'article4',
      done: true
    }
  ]
}

class App extends React.Component {
  renderItem = (item) => (
    <li>
      {item.description}:{item.done}
    </li>
  )

  render() {
    return <ShoppingList {...defaultProps} />
  }
}

App.propTypes = {}

/*export const mapDispatchToProps = () => ({})

const mapStateToProps = () => ({})*/

export default App
