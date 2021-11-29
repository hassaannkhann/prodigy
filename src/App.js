import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import Home from "../src/Pages/Home/Home";
import Contact from "../src/Pages/Contact/Contact";
import About from "../src/Pages/About/About";
import HCM from "../src/Pages/Services/HCM";
import POSeco from "./Pages/Services/POSeco";
import Clients from "./Pages/OurClients/Clients";
import AddJobs from "./Pages/Jobs/AddJobs";
import BizInstitute from "./Pages/BizInstitute/BizInstitute";


export default function App() {
  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/Contact" component={Contact}/>
        <Route exact path="/About" component={About}/>
        <Route exact path="/HCM" component={HCM}/>
        <Route exact path="/POSeco" component={POSeco}/>
        <Route exact path="/Clients" component={Clients}/>
        <Route exact path="/AddJobs" component={AddJobs}/>
        <Route exact path="/BizInstitute" component={BizInstitute}/>
      </Switch>
    </HashRouter>
  );
}
