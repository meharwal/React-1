import React, { Component } from "react";
import axios from "axios";

class App extends Component {
  state = {
    users: []
  };

  componentWillMount() {
    axios
      .get("https://api.randomuser.me/?nat=US&results=5")
      .then(response => {
        console.log(response);
        this.setState({ users: response.data.results });
      })
      .catch(err => {
        console.log("Error is ", err.message);
      });
  }

  render() {
    return (
      <div>
        <h1>Hello World</h1>
      </div>
    );
  }
}

export default App;
