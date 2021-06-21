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
import Csintro from "./components/cssintro/csintro";
import Cssyntax from "./components/css_syntax/cssyntax";
import Cselector from "./components/cssselectors/cseletor";
import Csshwto from "./components/csshwt/cshwto";
import Cscolor from "./components/cscolor/csccolor";
import Csborder from "./components/csborder/csborder";
export default function App() {
  return (
    <Router basename="/proworld/">
      <div>
        <Switch>
          <Route exact path="/" component={Front1} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/course" component={Course} />
          <Route path="/attribute" component={Attribute} />
          <Route path="/element" component={Element} />
          <Route path="/enroll/:name" component={Enroll} />
          <Route path="/html" component={Html} />
          <Route path="/mycourse" component={Mcourse} />
          <Route path="/para" component={Para} />
          <Route path="/tag" component={Tag} />
          <Route path="/login" component={Login} />
          <Route path="/head" component={Head} />
          <Route path="/cssintro" component={Csintro} />
          <Route path="/cssyntax" component={Cssyntax} />
          <Route path="/csselector" component={Cselector} />
          <Route path="/csshowto" component={Csshwto} />
          <Route path="/csscolor" component={Cscolor} />
          <Route path="/cssborder" component={Csborder} />
        </Switch>
      </div>
    </Router>
  );
}
