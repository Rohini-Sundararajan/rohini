import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Front1 from "./components/front/front1";
import About from "./components/about1/about";
import Contact from "./components/contact/contact";
import Course from "./components/course/course";
import Attribute from "./components/attrributes/attribute";
import Element from "./components/element/element";
import Enroll from "./components/enroll/enroll";
import Html from "./components/htmls/html";
import Mcourse from "./components/myCourse/myCourse";
import Para from "./components/para/para";
import Tag from "./components/tag/tag";
import Login from "./components/login/login";
import Head from "./components/heading/head";
export default function App() {
  return (
    <Router basename="/proworld">
      <div>
        <Switch>
          <Route exact path="/" component={Front1} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/course" component={Course} />
          <Route path="/Attribute" component={Attribute} />
          <Route path="/Element" component={Element} />
          <Route path="/Enroll" component={Enroll} />
          <Route path="/Html" component={Html} />
          <Route path="/Mycourse" component={Mcourse} />
          <Route path="/Para" component={Para} />
          <Route path="/Tag" component={Tag} />
          <Route path="/Login" component={Login} />
          <Route path="./Head" component={Head} />
          {/* <About /> */}
          {/* <Contact /> */}
          {/* <Course /> */}
          {/* <Attribute /> */}
          {/* <Element /> */}
          {/* <Enroll /> */}
          {/* <Html /> */}
          {/* <Mcourse /> */}
          {/* <Para /> */}
          {/* <Tag /> */}
          {/* <Login /> */}
          <Head />
        </Switch>
      </div>
    </Router>
  );
}
