import React from "react";

class User extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }
  render() {
    const { name, location, contact } = this.props;
    const { count } = this.state;
    return (
      <div className="user-card">
        <h1>count : {count}</h1>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Increase
        </button>
        <h2>{name}</h2>
        <p>{location}</p>
        <p>{contact}</p>
      </div>
    );
  }
}

export default User;
