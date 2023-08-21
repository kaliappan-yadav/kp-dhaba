import { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { CartContext } from './context/CartContext';

function Meal(props) {
  let cart = useContext(CartContext);
  let item = props.item
  let [notification, setNotification] = useState("");
  function addToCart(mealName, count){
    cart.push({itemName: mealName, quantity: count})
  }
  let [quantity, setQuantity] = useState(0);
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={item.strMealThumb} />
      <Card.Body>
        <Card.Title>{item.strMeal}</Card.Title>
          <Card.Text>
            {item.strMealDescription}
          </Card.Text>
          <label>Quantity : </label>
          <input required type='number' min={1} max={100} onChange={(e)=>{setQuantity(e.target.value)}}/>
          <Button onClick={() =>{ if (quantity<1 || quantity>100){
             setNotification("Invalid value");
          setTimeout(()=>{
            setNotification("");
          }, 3000)
          } 
          else{ addToCart(item.strMeal, quantity)
            setNotification(`${quantity} added to the cart!!!`);
          setTimeout(()=>{
            setNotification("");
          }, 3000)}
        }}
           >Buy</Button>
          <label>{notification}</label>
      </Card.Body>
    </Card>
  );
}

export default Meal;