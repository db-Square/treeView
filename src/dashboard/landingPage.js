import React from "react";

import { Form } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import TreeView from "../control/tree";
import "./landing.css";

export default class LandingPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      treeData: [],
      filter: null,
    };
  }

  componentDidMount() {
    this.setState({ treeData: this.createSampleData() });
  }

  createSampleData = () => {
    const sampleData = [
      {
        id: 1,
        name: "Title1",
        childrens: [{ id: 3, name: "child0", childrens: [] }],
      },
      {
        id: 2,
        name: "Title2",
        childrens: [
          { id: 3, name: "child1", childrens: [] },
          {
            id: 4,
            name: "child2",
            childrens: [
              { id: 5, name: "child2.1", childrens: [] },
              { id: 5, name: "child2.2", childrens: [] },
            ],
          },
        ],
      },
      {
        id: 6,
        name: "Title3",
        childrens: [{ id: 7, name: "child6.1", childrens: [] }],
      },
      {
        id: 8,
        name: "Title4",
        childrens: [],
      },
      {
        id: 9,
        name: "Title5",
        childrens: [{ id: 10, name: "child9.1", childrens: [] }],
      },
    ];

    return sampleData;
  };

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
    const { treeData } = this.state;
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

          <div class="item2">
            {treeData && treeData.length > 0 && (
              <TreeView treeData={treeData}></TreeView>
            )}
          </div>
          <div class="item3">© copyright by db-Square</div>
        </div>
      </div>
    );
  }
}
