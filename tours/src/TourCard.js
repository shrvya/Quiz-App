import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState } from "react";
export default function Tours({ id, image, info, name, price,removeTour}) {
  const [read,setread]=useState(false)
  function readmore(){
    setread(!read)
  }
  return (
    <Container fluid="md">
      <Row className="card-row">
        <Col>
          <Card className="h-80 overflow-y: auto"  style={{ width: "22rem"}}>
            <Card.Img variant="top" src={image}  style={{ width: "22rem" ,height:"15rem"}}/>
            <Card.Body>
              <Card.Title>{name}</Card.Title>
              <Card.Text style={{position:"relative",top:"-1rem" }}>
                {read? info :`${info.substring(0, 200)}`}
              <Button  variant="link" onClick={readmore}>{read ?  "show less ": "read more"}</Button></Card.Text>
              <Card.Text style={{position:"relative",top:"-2rem" }}>Price : {price}</Card.Text>
              <Button className="delete-btn"  style={{position:"relative",top:"-1rem" }} onClick={() => removeTour(id)}>
          not interested
        </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
