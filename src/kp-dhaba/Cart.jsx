import React, { useContext } from 'react'
import { Container, Table } from 'react-bootstrap'
import { CartContext } from './context/CartContext'

const Cart = (items) => {
    let cart = useContext(CartContext);
    cart.map((item,idx)=>console.log(item.itemName, item.quantity))
  return (
    <Container>
        <h1>Checkout </h1>
    <Table striped bordered hover>
      <thead>
        <td>Item</td>
        <td>Quantity</td>
      </thead>
      <tbody>
        {cart.map((item, idx)=> 
            <tr>
            <td>
            {item.itemName}
            </td>
            <td>{item.quantity}</td>
            </tr>
        )
        }
      </tbody>
    </Table>
    
    </Container>
  )
}

export default Cart