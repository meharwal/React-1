import React, { Component } from "react";
import axios from "axios";

class App extends Component {
  state = {
    users: []
  };

  getUsers() {
    axios
      .get("https://api.randomuser.me/?nat=US&results=5")
      .then(response => {
        this.setState({ users: response.data.results });
      })
      .catch(err => {
        console.log("Error is ", err.message);
      });
  }

  componentWillMount() {
    this.getUsers();
  }

  render() {
    return (
      <div>
        {this.state.users.map((user, id) => {
          return (
            <div key={id}>
              <h2>{user.name.first}</h2>
              <h3>{user.email}</h3>
              <hr />
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
