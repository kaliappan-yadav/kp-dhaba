
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap';
import Item from './Item';
import { useParams } from 'react-router-dom';
const CategoryHome = (props) => {
    let {category} = useParams();
  let [items, setItems] = useState([])
 
  const getPostitems = async () =>{
    console.log("category is :",category)
        let itemsInCategory =  await (await axios("https://www.themealdb.com/api/json/v1/1/filter.php?c="+category)).data.meals
        setItems(itemsInCategory);

  };

  const getCards = () =>{
    let cardsOfItems = items.map((item, index) => {
      return (
        <Col>
        <Item item={item} key={index} />
               </Col>
      )
    });
    return cardsOfItems;
  }
   
  useEffect(()=>{
    getPostitems();
    return (()=>{
      setItems([])
    })
  },[]);
  return (
    <Container>
      <Row xs={1} md={4}>
        {getCards()}
      </Row>
    </Container>
  )
}

export default CategoryHome