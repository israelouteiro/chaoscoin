 
/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components

function IndexHeader() {

  const availableBacks = [
    { image: require("assets/img/back-1.png") },
    { image: require("assets/img/back-2.png") },
    { image: require("assets/img/back-3.png") },
  ]

  const sortedBackground = Math.floor(Math.random() * 3 )

  return (
    <>
      <div
        className="page-header section-dark"
        style={{
          background:
            // "url(" + require("assets/img/pexels-melissa-griffin-5557491.jpg").default + ")",
            // "url(" + require("assets/img/pexels-roberto-zuniga-5275220.jpg").default + ") no-repeat center bottom / cover",
            "url(" + availableBacks[sortedBackground].image.default + ") no-repeat bottom center / cover",
        }}
      >
        <div className="filter" />
        <div className="content-center">
          <Container>
            <div className="title-brand">
              <h1 className="presentation-title">Chaos Coin</h1>
              <div className="fog-low">
                <img
                  alt="..."
                  src={require("assets/img/fog-low.png").default}
                />
              </div>
              <div className="fog-low right">
                <img
                  alt="..."
                  src={require("assets/img/fog-low.png").default}
                />
              </div>
            </div>
            <h2 className="presentation-subtitle text-center">
              Created to be Chaotic
            </h2>
          </Container>
        </div> 
      </div>
    </>
  );
}

export default IndexHeader;
