 
import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components

function SectionDark() {
  return (
    <>
      <div className="section section-dark">
        <Container>
          <Row>
            <Col lg="6" md="12">
              <h2 className="title">Contract Address</h2>
              <p className="description">
                0x85Dc7d4C8783f7F6DBEde5f045007E7bd69A6d8a
              </p>
              <h2 className="title">Network</h2>
              <p className="description">
                <a href="https://academy.binance.com/pt/articles/connecting-metamask-to-binance-smart-chain" style={{color: '#f2b81a'}} target="new">Binance Smart Chain</a>
              </p>
              <h2 className="title">Circulation Supply</h2>
              <p className="description">
                3.000M
              </p>
              <h2 className="title">Burn Rate</h2>
              <p className="description">
                1%
              </p>
              <h2 className="title">Burned Supply</h2>
              <p className="description">
                3.500.000+
              </p>
            </Col>
          </Row>
        </Container> 
      </div>
    </>
  );
}

export default SectionDark; 
