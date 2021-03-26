import React, { Component } from 'react'
import { Button, Table } from 'reactstrap'

export default class CartList extends Component {
    
    render() {
        return (
            <Table striped>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Category Id</th>
                    <th>Product Name</th>
                    <th>Unite Price</th>
                    <th>Quantity</th>
                </tr>
            </thead>

            <tbody>
                {
                    this.props.cart.map(cartItem=>(
                        <tr key={cartItem.product.id}>
                
                                <td>{cartItem.product.id}</td>
                                <td>{cartItem.product.categoryId}</td>
                                <td>{cartItem.product.productName}</td>
                                <td>{cartItem.product.unitPrice}</td>
                                <td>{cartItem.product.quantityPerUnit}</td>
                                <td>
                                    <Button color="danger" onClick={()=>this.props.removeFromCart(cartItem.product)}>Remove</Button>
                                </td>
                        </tr>
                    ))
                }
            </tbody>
        </Table>
    
        )
    }
}
