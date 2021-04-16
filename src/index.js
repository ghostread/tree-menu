import React from "react";
import ReactDOM from "react-dom";

import TreeMenu from "react-simple-tree-menu";

import "./styles.css";

class TreeMenuDemo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      properties: [
        {
          key: "0",
          label: "Motor_+SEP+_1",
          nodes: [
            {
              key: "1",
              label: 1.5,
              nodes: []
            }
          ]
        },
        {
          key: "2",
          label: "Motor_+SEP+_2",
          nodes: [
            {
              key: "3",
              label: 50,
              nodes: []
            }
          ]
        },
        {
          key: "4",
          label: "Motor_+SEP+_3",
          nodes: [
            {
              key: "5",
              label: 96,
              nodes: []
            }
          ]
        },
        {
          key: "6",
          label: "Motor_+SEP+_4",
          nodes: [
            {
              key: "7",
              label: 96,
              nodes: []
            }
          ]
        },
        {
          key: "8",
          label: "Motor_+SEP+_5",
          nodes: [
            {
              key: "9",
              label: 0,
              nodes: []
            }
          ]
        },
        {
          key: "10",
          label: "_id",
          nodes: [
            {
              key: "11",
              label: "BMW_slx_BMW_i8_jwuzbmei_data/130",
              nodes: []
            }
          ]
        },
        {
          key: "12",
          label: "_key",
          nodes: [
            {
              key: "13",
              label: "130",
              nodes: []
            }
          ]
        },
        {
          key: "14",
          label: "_rev",
          nodes: [
            {
              key: "15",
              label: "_YzGKOiy-Bf",
              nodes: []
            }
          ]
        },
        {
          key: "16",
          label: "acceleration",
          nodes: [
            {
              key: "17",
              label: 3.68038254190652,
              nodes: []
            }
          ]
        },
        {
          key: "18",
          label: "architecture",
          nodes: [
            {
              key: "19",
              label: "e16028_a1",
              nodes: []
            }
          ]
        },
        {
          key: "20",
          label: "endsoc",
          nodes: [
            {
              key: "21",
              label: 49.8844181956987,
              nodes: []
            }
          ]
        },
        {
          key: "22",
          label: "endspeed",
          nodes: [
            {
              key: "23",
              label: 27.7621100708752,
              nodes: []
            }
          ]
        },
        {
          key: "24",
          label: "fuel_cons",
          nodes: [
            {
              key: "25",
              label: 15.2124281097358,
              nodes: []
            }
          ]
        }
      ],
      initiallyOpenProperties: []
      // initiallyOpenProperties: [
      //   "0",
      //   "0/1",
      //   "2",
      //   "2/3",
      //   "4",
      //   "4/5",
      //   "6",
      //   "6/7",
      //   "8",
      //   "8/9",
      //   "10",
      //   "10/11",
      //   "12",
      //   "12/13",
      //   "14",
      //   "14/15",
      //   "16",
      //   "16/17",
      //   "18",
      //   "18/19",
      //   "20",
      //   "20/21",
      //   "22",
      //   "22/23",
      //   "24",
      //   "24/25"
      // ],
    };
  }

  handleExpandTree = () => {
    console.log("expanding tree");
    this.setState({
      initiallyOpenProperties: [
        "0",
        "0/1",
        "2",
        "2/3",
        "4",
        "4/5",
        "6",
        "6/7",
        "8",
        "8/9",
        "10",
        "10/11",
        "12",
        "12/13",
        "14",
        "14/15",
        "16",
        "16/17",
        "18",
        "18/19",
        "20",
        "20/21",
        "22",
        "22/23",
        "24",
        "24/25"
      ]
    });
  };

  render() {
    return (
      <div>
        <TreeMenu
          data={this.state.properties}
          initialOpenNodes={this.state.initiallyOpenProperties}
          hasSearch={false}
          onClickItem={this.handleClick}
        />
        <button onClick={this.handleExpandTree}>Expand tree</button>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<TreeMenuDemo />, rootElement);
