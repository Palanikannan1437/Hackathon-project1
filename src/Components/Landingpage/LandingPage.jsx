import React from "react";
import NavigationBar from "../NavigationBar.jsx";
import ExploreSection from "./ExploreSection.jsx";
import MainSection from "./MainSection.jsx";
import SubSection from "./SubSection.jsx";

function LandingPage(props) {
  return (
    <div style={{ height: "1300px" }}>
      <NavigationBar
        itemcolor="#5B10A8"
        bgcolor="#FFFFFF"
        hovercolor="#FFFFFF"
        hoverbgcolor="linear-gradient(242.75deg, #410C75 19.25%, #B638FF 67%)"
      />
      <MainSection />
      <div className="subsection">
        <SubSection
          bgUrl="/Images/LandingPage/InvestmentMainPage.png"
          alt="bitcoin-Investments"
          title="Investments"
          pathtitle="InvestmentPage"
        ></SubSection>

        <SubSection
          bgUrl="/Images/LandingPage/TransactionMainPage.png"
          alt="bitcoin-Transaction"
          title="Transaction"
          pathtitle="TransactionsPage"
        ></SubSection>

        <SubSection
          bgUrl="/Images/LandingPage/BitcoinMiningMainPage.png"
          alt="bitcoin-Mining"
          title="Bitcoin-Mining"
          pathtitle="MiningPage"
        ></SubSection>
      </div>
      <ExploreSection />
    </div>
  );
}

export default LandingPage;
