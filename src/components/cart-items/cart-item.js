import React from 'react'

export default class CartItem extends React.Component {
    render() {
        const { item } = this.props
        return (
                <div class="list-group-item">
                    <div class="row">
                        <div class="col-md-8">{item.product.name}</div>
                        <div class="col-md-2">{item.product.priceInCents/100}</div>
                    <div class="col-md-2">{item.product.id}</div>
                    </div>
                </div>
        )
    }
}
