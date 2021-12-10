import React from 'react'
import {Card, Button} from 'react-bootstrap'

function ProductCard(props) {
    return (
        <div className="mt-5 pt-5">
        <Card style={{ width: '18rem' }} className="text-center">
        <Card.Img variant="top" src={props.card} height="auto" width="100%"/>
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
          <Button variant="success">Add To Cart</Button>
        </Card.Body>
      </Card>
     
        </div>
    )
}

export default ProductCard
