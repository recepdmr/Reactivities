import React from "react";
import { Header, Icon, List } from "semantic-ui-react";

import axios from "axios";

class App extends React.Component {
  state = {
    values: [],
  };

  componentDidMount() {
    axios.get("https://localhost:5001/api/values").then((response) => {
      this.setState({ values: response.data });
    });
  }
  render() {
    return (
      <div className="App">
        <Header as="h2">
          <Icon name="users" />
          <Header.Content>Reactivities</Header.Content>
        </Header>
        <List>
          {this.state.values.map((value: any) => (
            <List.Item key={value.id}>{value.name}</List.Item>
          ))}
        </List>
        <ul></ul>
      </div>
    );
  }
}
export default App;
