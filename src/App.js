import React from "react";
import TopNav from "./components/TopNav";
import SideNav from "./components/SideNav";
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Charts from "./components/Charts";
import Tables from "./components/Tables";
import Settings from "./components/Settings";
import Wall from "./components/Wall";
import Profiles from "./components/Profiles";
import Marquee from "./components/Marquee";
import Profile from "./components/Profile";


function App() {
  return (
    <div>
      <div id="wrapper">
        <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
          <TopNav />
          <SideNav />
        </nav>
        <div style={{backgroundColor: "white"}}>
          {/* PUT YOUR ROUTES HERE */}
          <BasicExample />
        </div>
      </div>
    </div>

  );
}


const BasicExample = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="/charts">Charts</Link></li>
        <li><Link to="/tables">Tables</Link></li>
        <li><Link to="/settings">Settings</Link></li>
        <li><Link to="/wall">Wall</Link></li>
        <li><Link to="/Profiles">Profiles</Link></li>
        <li><Link to="/marquee/ThisismyAwesomeMarquee">Marquee</Link></li>
        <li><Link to="/profile">Profile</Link></li>

      </ul>

      <hr />

      <Route exact path="/" component={Dashboard} />
      <Route path="/charts" component={Charts} />
      <Route path="/tables" component={Tables} />
      <Route path="/settings" component={Settings} />
      <Route path="/wall" component={Wall} />
      <Route path="/profiles" component={Profiles} />
      <Route path="/marquee/:text" component={Marquee} />
      <Route path="/profile/:id" component={Profile} />

    </div>
  </Router>
);


export default App;
