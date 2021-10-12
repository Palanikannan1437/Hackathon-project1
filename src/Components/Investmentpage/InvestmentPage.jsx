import React from "react";
import NavigationBar from "../NavigationBar";
import SubPageBox from "../SubPageBox";

function InvestmentPage() {
  return (
    <div className="Investment__header">
      <NavigationBar
        itemcolor="white"
        bgcolor=""
        hovercolor="#27449D"
        hoverbgcolor="#FFF"
      />
      {/* <img className="Investment__img" src="/Images/BitcoingInvestment.jpg" alt="Sub Page Background"/> */}
      <h1 className="Investment__title">Investment</h1>
      <p className="Investment__desc">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. orem ipsum dolor sit amet, consectetur adipiscing
        elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
        ut aliquip ex ea commodo consequat.{" "}
      </p>
      <div className="sub__container">
        <SubPageBox
          subtitle="Read All About It"
          subdesc=" 
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
				quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  
				"
          subid="1"
          name="LibraryBooksIcon"
          color1="40ECF6"
          feature__type="InfoPage"
        />
        <SubPageBox
          subtitle="The Blog Page"
          subdesc="
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
				quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  
				"
          subid="2"
          name="ChromeReaderModeIcon"
          color1="3496CB"
          feature__type="BlogPage"
        />
        <SubPageBox
          subtitle="Other Resources"
          subdesc="
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
				quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
				"
          subid="3"
          name="DevicesOtherIcon"
          color1="192486"
          feature__type="ResourcePage"
        />
      </div>
    </div>
  );
}

export default InvestmentPage;
