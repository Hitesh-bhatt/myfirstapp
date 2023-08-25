import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ImageCard = (val) => {
  

    const [Count, setCount] = useState(0)
    const HandleClick1=()=>{
      setCount(Count+1)
    console.log("Button is clicked",Count);
    }
    const HandleClick2=()=>{
      setCount(Count-1)
      if(Count<=0)
      {
        alert("Negative number")
      }
    console.log("Button is clicked",Count);
    }
  
  
  
  return (
    <div>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={val.imgsrc} />
      <Card.Body>
        <Card.Title>{val.title}</Card.Title>
        <Card.Text>
          {val.desc}
        </Card.Text>
        <p>{Count}</p>
        <Button onClick={HandleClick1} variant="primary" >+</Button>
        <Button onClick={HandleClick2} variant="primary" >-</Button>
        
      </Card.Body>
    </Card>
    </div>
  )
}

export default ImageCard
