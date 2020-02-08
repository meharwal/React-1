import React, { Component } from "react";
import axios from "axios";

class App extends Component {
  state = {
    users: [],
    loading: false
  };

  getUsers() {
    this.setState({ loading: true });
    axios
      .get("https://api.randomuser.me/?nat=US&results=5")
      .then(response => {
        this.setState({ loading: false });
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
    let data = this.state.users.map((user, id) => {
      return (
        <div key={id}>
          <h2>{user.name.first}</h2>
          <h3>{user.email}</h3>
          <hr />
        </div>
      );
    });
    if (this.state.loading) {
      data = <h1>Loading...</h1>;
    }
    return <div>{data}</div>;
  }
}

export default App;
