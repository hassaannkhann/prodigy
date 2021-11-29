import Card from "react-bootstrap/Card";
// import Button from "react-bootstrap/Button";

const SandD = (props) => {
  return (
    <Card id="services" style={{ width: "95%" }} className="h-100">
      <Card.Img variant="top" src={props.imgUrl} />
      <Card.Body>
        <Card.Title>{props.Title}</Card.Title>
        <Card.Text>
          {props.Text}
        </Card.Text>
        {/* <Button variant="primary">Read more</Button> */}
        <a href={props.link} className={`btn btn-primary btn-lg ${props.status}`} role="button" aria-pressed="true">Read More</a>
      </Card.Body>
    </Card>
  );
};

export default SandD;
