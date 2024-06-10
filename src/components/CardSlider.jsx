import React from 'react'
import {Card} from 'react-bootstrap';
import { Link } from 'react-router-dom';


const  CardSlider = props => {
  let {ImgSrc, Title , Text} = props.data;
  return (
    <Card className=' ' style={{ width: '400px' , borderRadius: '20px', } }>
      <div className=''>
          <Card.Img variant='top' src={ImgSrc} />
      </div>

      <Card.Body className='text-start text-dark'>
        <Card.Title><Link to="/PondokCai">{Title} </Link></Card.Title>
        <Card.Text>{Text}</Card.Text>
      </Card.Body>
  </Card>
  )
}

export default CardSlider

