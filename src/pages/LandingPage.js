import React from "react";
import { Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
    const navigate=useNavigate();
    function clickHandler(){
        navigate('/home');
    }


  return (
    <div className="mt-3" >
      <Row className="d-flex justify-content-center align-items-center">
        <Col></Col>
        <Col lg={5}>
          <h2 className="mt-5">
            Welcome to <span className="text-warning">mediaplayer</span>
          </h2>
          <p style={{ textAlign: "justify" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor,
            nisl quis malesuada suscipit, tellus metus tincidunt turpis, sit
            amet lacinia nisl velit eu libero. Sed ac enim eu ligula consectetur
            tristique. Integer sagittis mi in turpis congue, nec consectetur
            sapien vehicula. Sed sit amet urna nec purus gravida facilisis.
            Nulla facilisi. Sed sit amet sapien vel tortor euismod facilisis a
            in metus. Nullam vel erat ac sapien semper lacinia.
          </p>
          <button onClick={clickHandler} className="btn btn-warning mt-5">Get started
          <i class="fa-solid fa-arrow-right ms-2"></i>
          </button>
        </Col>
        <Col></Col>
        <Col lg={5}>
          <img
            style={{ height: "300px", width: "250px" }}
            src="https://media.tenor.com/lhlDEs5fNNEAAAAC/music-beat.gif"
          />
        </Col>
      </Row>

      <div className="container d-flex justify-content-center align-items-center w-100 mt-5 mb-5 flex-column p-1 ">
        <h3>Features</h3>
        <div className="cards d-flex justify-content-center align-items-center">
          <Card className="p-4 " style={{ width: "18rem" }}>
            <Card.Img
              style={{ width: "100%", height: "300px" }}
              className="p-4"
              variant="top"
              src="https://i.pinimg.com/originals/ad/d2/31/add23123b088c3301cc2c71f7767048d.gif"
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>

          <Card className="p-4 ms-2" style={{ width: "18rem" }}>
            <Card.Img
              style={{ width: "100%", height: "300px" }}
              variant="top"
              src="https://i.pinimg.com/originals/2d/2d/51/2d2d51ba3d86b27b221abb162c24edc0.gif"
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>

          <Card className="p-4 ms-2" style={{ width: "18rem" }}>
            <Card.Img
              style={{ width: "100%", height: "300px" }}
              variant="top"
              src="https://i.pinimg.com/originals/48/c6/12/48c61262980bb7dbf2557940d41c7d0b.gif"
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>
      </div>

      <div className="container border border-2 rounded border-secondary p-5 mt-5 mb-5">
        <Row>
          <Col></Col>
          <Col lg={5}>
            <h3 className="text-warning">Simple fast and powerful</h3>
            <p>
              <span className="fs-5 fw-bold "> Lorem</span> ipsum dolor sit
              amet, consectetur adipiscing elit. Sed auctor, nisl quis malesuada
              suscipit, tellus metus tincidunt turpis, sit amet lacinia nisl
              velit eu libero. Sed ac enim eu ligula consectetur tristique.
              Integer sagittis mi in turpis congue, nec consectetur sapien
              vehicula. Sed sit amet urna nec purus gravida facilisis. Nulla
              facilisi.
            </p>
            <p>
              <span className="fs-5 fw-bold "> Lorem</span>ipsum dolor sit amet,
              consectetur adipiscing elit. Sed auctor, nisl quis malesuada
              suscipit, tellus metus tincidunt turpis, sit amet lacinia nisl
              velit eu libero. Sed ac enim eu ligula consectetur tristique.
              Integer sagittis mi in turpis congue, nec consectetur sapien
              vehicula. Sed sit amet urna nec purus gravida facilisis. Nulla
              facilisi.
            </p>
            <p>
              <span className="fs-5 fw-bold "> Lorem</span>ipsum dolor sit amet,
              consectetur adipiscing elit. Sed auctor, nisl quis malesuada
              suscipit, tellus metus tincidunt turpis, sit amet lacinia nisl
              velit eu libero. Sed ac enim eu ligula consectetur tristique.
              Integer sagittis mi in turpis congue, nec consectetur sapien
              vehicula. Sed sit amet urna nec purus gravida facilisis. Nulla
              facilisi.
            </p>
          </Col>
          <Col></Col>
          <Col lg={5}>
            <iframe
              width="500"
              height="400"
              src="https://www.youtube.com/embed/IqwIOlhfCak"
              title="LEO - Badass Lyric | Thalapathy Vijay | Lokesh Kanagaraj | Anirudh Ravichander"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </Col>
        </Row>
      </div>
    </div>
  );
}
