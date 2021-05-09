import React from "react";
import AboutNavigation from "./AboutNavigation"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Education, Hobbies, Volunteering } from "./aboutSection";

function About() {
  return (
    <div className="about">
      <Router>
        <Switch>
          <Route path="/education" exact component={() => <Education />} />
          <Route path="/hobbies" exact component={() => <Hobbies />} />
          <Route path="/volunteering" exact component={() => <Volunteering />} />
        </Switch>
      </Router>
    </div>
  );
}

export default About;