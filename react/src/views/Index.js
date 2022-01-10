
import React from "react";

// reactstrap components

// core components

import IndexHeader from "components/Headers/IndexHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";

import SectionNucleoIcons from "views/index-sections/SectionNucleoIcons.js";
import SectionDarkTop from "views/index-sections/SectionDarkTop.js";
import SectionDark from "views/index-sections/SectionDark.js";
import SectionDarkBottom from "views/index-sections/SectionDarkBottom.js";
import SectionLogin from "views/index-sections/SectionLogin.js"; 

function Index() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("index");
    return function cleanup() {
      document.body.classList.remove("index");
    };
  });
  return (
    <>
      <IndexHeader />
      <div className="main"> 
        <SectionDarkTop />
        <SectionNucleoIcons />
        <SectionDark />
        <SectionDarkBottom />
        {/* <SectionLogin />  */}
        <DemoFooter />
      </div>
    </>
  );
}

export default Index;
