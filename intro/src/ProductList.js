import React, { Component } from 'react'
import {Button, Table} from 'reactstrap'

export default class ProductList extends Component {
    render() {
        return (
            <div>
                    <h2>Product List-{this.props.currentCategory}</h2>
        <Table>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>
                        Quantity
                    </th>
                    <th>Unit-Price</th>
                    </tr>
                </thead>
                <tbody>
                {this.props.products.map(product=>(

                        <tr key={product.id}>
                            <th scope="row">{product.id}</th>
                            <td>{product.productName}</td>
                            <td>{product.quantityPerUnit}</td>
                            <td>{product.unitPrice}</td>
                            <td><Button onClick={()=>this.props.addToCart(product)} color="info">Add</Button></td>
                        </tr>

                    ))}
                </tbody>
    </Table>
            </div>
        )
    }
}
