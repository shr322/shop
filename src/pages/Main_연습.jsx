import { Button, Card, Col, Container, Row } from "react-bootstrap";

function Main(props) {
  const arr = JSON.parse(localStorage.getItem("task"));

  console.log(arr)
  return (
    <>
      <div className="main-bg"></div>
      <Container></Container>
      <h2>최근 본 상품</h2>

      <Container>
        <Row>
          {
            !!arr ? arr.map((item,i) => {
            return (<Col xs={6} md={4}>
              <Card>
                <Card.Img
                  variant="top"
                  src={`https://codingapple1.github.io/shop/shoes${
                    arr[i] + 1
                  }.jpg`}
                />
                <Card.Body>
                  <Card.Title>{props.shoes[arr[i]].title}</Card.Title>
                  <Card.Text>{props.shoes[arr[i]].content}</Card.Text>
                  <Card.Text>{props.shoes[arr[i]].price}</Card.Text>
                  <Button
                    variant="primary"
                    onClick={() => {
                      props.navigate(`/detail/${props.shoes[arr[i]].id}`);
                    }}
                  >
                    Go
                  </Button>
                </Card.Body>
              </Card>
            </Col>)
          }) : null

          }
        </Row>
      </Container>
    </>
  );
}

export default Main;
