import React, { Component } from "react";
import axios from "axios";
import Loading from "./loading";

class App extends Component {
  state = {
    users: [],
    loading: false
  };

  getUsers() {
    axios
      .get("https://api.randomuser.me/?nat=US&results=5")
      .then(response => {
        let setData = [...this.state.users, ...response.data.results];
        this.setState({ users: setData });
      })
      .catch(err => {
        console.log("Error is ", err.message);
      });
  }

  handleSubmit = event => {
    event.preventDefault();
    this.getUsers();
    console.log("more users loaded");
  };

  componentWillMount() {
    this.setState({ loading: true });
    this.getUsers();
    this.setState({ loading: false });
  }

  render() {
    const { loading, users } = this.state;
    let data = users.map((user, id) => {
      return (
        <div key={id}>
          <h2>{user.name.first}</h2>
          <h3>{user.email}</h3>
          <hr />
        </div>
      );
    });
    if (loading) {
      data = <Loading message="Hey Hey" />;
    }
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="submit" value="Load User" />
        </form>
        {data}
      </div>
    );
  }
}

export default App;
