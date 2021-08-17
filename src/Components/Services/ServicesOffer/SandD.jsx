import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const SandD = (props) => {
  return (
    <Card style={{ width: "95%" }}>
      <Card.Img variant="top" src={props.imgUrl} />
      <Card.Body>
        <Card.Title>{props.Title}</Card.Title>
        <Card.Text>
          {props.Text}
        </Card.Text>
        <Button variant="primary">Read more</Button>
      </Card.Body>
    </Card>
  );
};

export default SandD;
