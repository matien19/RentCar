import React from 'react'
import '../../css/AfterLogin/FindCarForm.css'
import Button from 'react-bootstrap/Button';


function ButtonPesan() {
  return (

    <div className='Container'>
       
        <Button variant="primary" size="lg">
          Pesan Dengan Pengemudi
        </Button>{' '}
        <Button variant="primary" size="lg">
          Pesan Tanpa Pengemudi
        </Button>{' '}
   
    </div>
   
  )
}

export default  ButtonPesan