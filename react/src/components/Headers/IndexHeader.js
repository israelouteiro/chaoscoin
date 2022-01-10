 
/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components

function IndexHeader() {
  return (
    <>
      <div
        className="page-header section-dark"
        style={{
          background:
            // "url(" + require("assets/img/pexels-melissa-griffin-5557491.jpg").default + ")",
            "url(" + require("assets/img/pexels-roberto-zuniga-5275220.jpg").default + ") no-repeat center bottom / cover",
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
