
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Category(props) {
  let category = props.item
    return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={category.strCategoryThumb} />
      <Card.Body>
        <Card.Title>{category.strCategory}</Card.Title>
          <Card.Text>
            {category.strCategoryDescription}
          </Card.Text>
          <Link to={`/category/${category.strCategory}`}>Go Back</Link>
      </Card.Body>
    </Card>
  );
}

export default Category;