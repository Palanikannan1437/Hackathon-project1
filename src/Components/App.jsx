import React from "react";
import LandingPage from "./Landingpage/LandingPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import InvestmentPage from "./Investmentpage/InvestmentPage";
import TransactionsPage from "./Transactionspage/TransactionsPage";
import MiningPage from "./Miningpage/MiningPage";
import ProfilePage from "./Profilepage/ProfilePage";
import Resource from "./Resourcepage/Resource";
import PostPage from "./PostPage/PostPage";
import InfoPage from "./Infopage/InfoPage";
import BlogPage from "./BlogPage/BlogPage";
import Animation from "./Animation";
import Animation2 from "./Animation2";

function App(props) {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/InvestmentPage" component={InvestmentPage} />
          <Route path="/TransactionsPage" component={TransactionsPage} />
          <Route path="/MiningPage" component={MiningPage} />
          <Route path="/Resource" component={Resource} />
          <Route path="/ProfilePage" component={ProfilePage} />
          <Route path="/PostPage" component={PostPage} />
          <Route path="/InfoPage" component={InfoPage} />
          <Route path="/BlogPage" component={BlogPage} />
          <Route path="/AnimationPage" component={Animation} />
          <Route path="/Animation2Page" component={Animation2} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
