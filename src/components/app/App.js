import React, { Component } from 'react'
import './App.css'
import CartHeader from '../cart-header/cart-header.js'
import CartFooter from '../cart-footer/cart-footer.js'
import CartItems from '../cart-items/cart-items.js'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [
        { id: 1, product: { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 }, quantity: 1 },
        { id: 2, product: { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 }, quantity: 2 },
        { id: 3, product: { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 }, quantity: 1 },
      ]
    }
  }


  render() {
    return (
      <div className="App">
      <CartHeader />
      <CartItems items={this.state.items}/>
      <CartFooter copywrite='2016'/>
      </div>
    )
  }
}

export default App;
