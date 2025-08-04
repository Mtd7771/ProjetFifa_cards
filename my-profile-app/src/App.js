import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Person: {
        fullName: "Moussa Diaw",
        bio: "A passionate developer from Senegal.",
        imgSrc: "https://via.placeholder.com/150",
        profession: "Software Engineer"
      },
      shows: false,
      timeSinceMount: 0
    };
    this.toggleShow = this.toggleShow.bind(this);
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState((prevState) => ({
        timeSinceMount: prevState.timeSinceMount + 1
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  toggleShow() {
    this.setState((prevState) => ({
      shows: !prevState.shows
    }));
  }

  render() {
    const { Person, shows, timeSinceMount } = this.state;

    return (
      <div className="App" style={{ textAlign: "center", padding: "20px" }}>
        <button onClick={this.toggleShow}>
          {shows ? "Hide Profile" : "Show Profile"}
        </button>

        {shows && (
          <div style={{ marginTop: "20px" }}>
            <img src={Person.imgSrc} alt="Profile" />
            <h2>{Person.fullName}</h2>
            <p>{Person.bio}</p>
            <h4>{Person.profession}</h4>
          </div>
        )}

        <p style={{ marginTop: "20px" }}>
          Time since mount: {timeSinceMount} seconds
        </p>
      </div>
    );
  }
}

export default App;
