import { Container, Row, Col, Card, Button } from "react-bootstrap";
import axios from "axios";
import { useState } from "react";

function DetailList(props) {

  return (
    <>

      <Button variant="primary" onClick={()=>{
        const copy = JSON.parse(JSON.stringify(props.shoes)).sort((a,b)=>{
          if(a.title < b.title) return -1
          if(a.title > b.title) return 1
        });

        props.setShoes(copy)
      }}>정렬</Button>

      <Button variant="primary" onClick={()=>{

        async function fetchData(url){
          try {
            props.setLoading(true);

            const result = await fetch(url);
            const data = await result.json();

            const copy = [...props.shoes, ...data];
            props.setShoes(copy)

            props.setCount((prev) => prev+1)

            props.setLoading(false);
          } catch(err){
            console.log(err)
          }
        }

        if(props.count === 0){
          fetchData('https://codingapple1.github.io/shop/data2.json')
        } else if(props.count === 1){
          fetchData('https://codingapple1.github.io/shop/data3.json')
        } else {
          alert('더 없음')
          props.setLoading(false);
        }
        
      }}>더보기</Button>

      {
        props.loading ? <div className="loading">로딩중</div> : null
      }

      <Container>
        <Row>
          {props.shoes.map((item, i) => {
            return (
              <Col xs={6} md={4} key={i}>
                <Card>
                  <Card.Img variant="top" src={`https://codingapple1.github.io/shop/shoes${item.id + 1}.jpg`}/>
                  <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>{item.content}</Card.Text>
                    <Card.Text>{item.price}</Card.Text>
                    <Button variant="primary" onClick={()=>{props.navigate(`/detail/${item.id}`)}}>Go</Button>
                  </Card.Body>
                </Card>
              </Col>
            )
          })}
        </Row>
      </Container>
    </>
  );
}

export default DetailList;
