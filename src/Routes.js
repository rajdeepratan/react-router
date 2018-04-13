import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Home  from './component/Home/Home.js';
// import About from './component/About/About.js';
// import Head from  './component/Head/Head.js';
import {
  Head,
  Home,
  About,
} from 'component';

const Routes = () => (
      <Router>
          <Switch>
            <Head path="/">
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/about/2" component={Home} />
            </Head>
            {/* <Route exact path="*" component={Home} /> */}

          </Switch>
      </Router>
);

export default Routes;
