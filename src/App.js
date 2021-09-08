import "./App.css";
import React from "react";
import axios from "axios";
import UserCard from "./UserCard";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      arrayOfUsers: []
    };
  }

  // componentDidMount is a react method that is called as soon as this app component has mounted.
  componentDidMount() {
    axios.get("https://randomuser.me/api?results=25").then((res) => {
      const arrayOfUsers = res.data.results;
      this.setState({ arrayOfUsers });
      console.log("data", arrayOfUsers);
    });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 style={{ textAlign: "center" }}>Address Book</h1>
          <ol>
            {this.state.arrayOfUsers.map((user, index) => {
              return (
                <UserCard
                  key={index}
                  index={index}
                  picture={user.picture.large}
                  name={`${user.name.title} ${user.name.first} ${user.name.last}`}
                  location={`${user.location.street.number}
                  ${user.location.street.name} ${user.location.city}, ${user.location.state}, ${user.location.country}, ${user.location.postcode}`}
                  phone={`Phone: ${user.phone} Cellphone: ${user.cell}`} email={`Email: ${user.email}`}
                />
              );
            })}
          </ol>
        </header>
      </div>
    );
  }
}

export default App;
// turn your functional component into a class-based component so you can create local state

