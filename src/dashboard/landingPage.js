import React from "react";

import { Form } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import "./landing.css";

export default class LandingPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      treeData: [],
      filter: null,
    };
  }

  componentDidMount() {}

  getDatetime = () => {
    const date = new Date();
    return date.toDateString();
  };

  greeting = () => {
    var today = new Date();
    var curHr = today.getHours();

    return curHr < 12
      ? "Good morning"
      : curHr < 18
      ? "Good afternoon"
      : "Good evening";
  };

  render() {
    return (
      <div>
        <div class="page-Layout">
          <div class="item1">
            <div>{this.greeting()}</div>
            <div>Building TreeView Control</div>
            <div>
              I am Deeptanshu Belwal, Full Stack Developer, Bangalore, India
            </div>
          </div>

          <div class="item2">tree conrol</div>
          <div class="item3">© copyright by db-Square</div>
        </div>
      </div>
    );
  }
}
