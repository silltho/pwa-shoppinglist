import React from 'react'
import firebase from 'config/firebase'

class ShoppingListForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      newItemDesc: ''
    }
  }

  onInputChange = (e) => {
    this.setState({
      newItemDesc: e.target.value
    })
  }

  onFormSubmit = (e) => {
    e.preventDefault()
    firebase.push({
      description: this.state.newItemDesc,
      done: false
    })
    this.setState({ newItemDesc: '' })
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <input
          type="text"
          onChange={this.onInputChange}
          value={this.state.newItemDesc}
        />
        <input type="submit" value="+" />
      </form>
    )
  }
}

ShoppingListForm.propTypes = {}

export default ShoppingListForm
