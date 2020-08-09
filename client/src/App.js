import React, { Component } from "react";

import axios from "axios";

import logo from "./logo.svg";

import "./App.css";

class App extends Component {
  state = {
    response: "",
    post: "",
    responseToPost: "",
  };

  componentDidMount() {
    this.callApi()
      .then((res) => this.setState({ response: res.express }))
      .catch((err) => console.log(err));
  }

  callApi = async () => {
    const response = await fetch("/api/hello");
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    const resp = await axios("/api/world", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify({ post: this.state.post }),
      // data: "{ post: 5 }",
    });

    console.log(resp);
    this.setState({ responseToPost: resp.data });
  };

  constructor(props) {
    super(props);
    this.state = {
      responseToPost: [],
    };
  }

  renderTableData() {
    return this.state.responseToPost.map((tableData, index) => {
      const { name, total } = tableData; //destructuring
      return (
        <tr key={name}>
          <td>{name}</td>
          <td>{total}</td>
        </tr>
      );
    });
  }

  render() {
    return (
      <div>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Assignment for Terribly Tiny Tales
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github Repository
            </a>
          </header>
          <p id="grettings">{this.state.response}</p>
          <form onSubmit={this.handleSubmit}>
            <p>
              <strong>Enter Value</strong>
            </p>
            <input
              type="number"
              value={this.state.post}
              onChange={(e) => this.setState({ post: e.target.value })}
            />
            <button type="submit">Submit</button>
          </form>
        </div>

        <div>
          <h1 id="title">Words Frequency Table</h1>
          <table id="tableData">
            <tbody> 
              { <tr>
                  <th>Words</th>
                  <th>Frequency</th>
                </tr> 
              }
              {this.renderTableData()}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default App;