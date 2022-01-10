 
import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";
import Lottie from 'react-lottie';
import * as animationData from './../../assets/lottie/62952-money-plant.json'

// core components

function SectionDarkBottom() {
  return (
    <>
      <div className="section section-dark"> 
        <Container>
          <Row>
            <Col className="ml-auto mr-auto text-center" md="8">
              {/* <h2 className="title">0x85Dc7d4C8783f7F6DBEde5f045007E7bd69A6d8a</h2> */}

              {/* <Lottie options={{ loop: true, autoplay: true,  animationData: require('./../../assets/lottie/9888-money-money-money.json') }}
                height={400}
                width={400} /> */}
 
              {/* <p className="description">
                With our small consumption rate, you can hold and trade without worrying about losing money. we understand that time is our ally. because nothing escapes the chaos 
              </p> */}
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default SectionDarkBottom; 
