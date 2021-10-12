import React from "react";
import NavigationBar from "../NavigationBar";
import SubPageBox from "../SubPageBox";
function TransactionsPage() {
  return (
    <div className="Transactions__header">
      <NavigationBar
        itemcolor="white"
        bgcolor=""
        hovercolor="#0A2C48"
        hoverbgcolor="#FFF"
      />
      {/* <img className="Transactions__img" src="/Images/BitcoinTransactions.png" alt="Sub Page Background"/> */}
      <h1 className="Transactions__title">Transactions</h1>
      <p className="Transactions__desc">
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
          color1="D55C3F"
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
          color1="FCD755"
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
          color1="0C89E3"
          feature__type="ResourcePage"
        />
      </div>
    </div>
  );
}

export default TransactionsPage;
