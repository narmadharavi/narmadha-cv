import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AboutNavigation from "./AboutNavigation.jsx";
import { Education, Hobbies, Volunteering } from "./aboutSection";

function About() {
  return (
    <div className="about">
      <Router>
        <AboutNavigation />
        <Switch>
          <Route path="/education" exact component={() => <Education />} />
          <Route path="/hobbies" exact component={() => <Hobbies />} />
          <Route path="/volunteering" exact component={() => <Volunteering />} />
        </Switch>
      </Router>
    </div >
  );
}

export default About;