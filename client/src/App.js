import React, { Component } from "react";

import { Container, Header, List, Button } from "semantic-ui-react";

class App extends Component {
  // Initialize state
  state = { passwords: [] };

  // Fetch passwords after first mount
  componentDidMount() {
    this.getPasswords();
  }

  getPasswords = () => {
    // Get the passwords and store them in state
    fetch("/api/passwords")
      .then(res => res.json())
      .then(passwords => this.setState({ passwords }));
  };

  render() {
    const { passwords } = this.state;
    const passList = passwords.map((entry, index) => (
      <List.Item key={index}>{entry}</List.Item>
    ));

    return (
      <Container text textAlign="center">
        <br />
        {passwords.length ? (
          <div>
            <Header as="h2">5 Passwords</Header>
            <List>{passList}</List>
            <Button  primary content='Get More' onClick={this.getPasswords} />
          </div>
        ) : (
          <div>
            <Button  primary content='Try Again?' onClick={this.getPasswords} />
          </div>
        )}
      </Container>
    );
  }
}

export default App;
