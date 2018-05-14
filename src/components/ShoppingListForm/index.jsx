import React from 'react'
import PropTypes from 'prop-types'

class ShoppingListForm extends React.Component {
  render() {
    return (
      <form>
        <input type="text" />
        <input type="submit" value="+" />
      </form>
    )
  }
}

ShoppingListForm.propTypes = {}

export default ShoppingListForm
