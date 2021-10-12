import React from "react";
import NavigationBar from "../NavigationBar";
import SubPageBox from "../SubPageBox";
// import {Link} from 'react-router-dom';
function MiningPage() {
  return (
    <div className="Mining__header">
      <NavigationBar
        itemcolor="white"
        bgcolor=""
        hovercolor="#023453"
        hoverbgcolor="#FFF"
      />
      {/* <img className="Transactions__img" src="/Images/BitcoinTransactions.png" alt="Sub Page Background"/> */}
      <h1 className="Mining__title">Bitcoin Mining</h1>
      <p className="Mining__desc">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. orem ipsum dolor sit amet, consectetur adipiscing
        elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
        ut aliquip ex ea commodo consequat.
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
          color1="15F7FD"
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
          color1="196DCB"
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
          color1="011A38"
        />
      </div>
    </div>
  );
}

export default MiningPage;
