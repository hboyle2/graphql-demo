import React, { Component } from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";

const UPDATE_WIZARD = gql`
  mutation updateWizard($id: Int, $name: String, $image: String) {
    updateWizard(id: $id, name: $name, image: $image) {
      id
      name
      image
    }
  }
`;

class UpdateWizard extends Component {
  state = {
    name: "",
    image: "",
    id: 0
  };

  render() {
    const { name, image, id } = this.state;

    return (
      <div>
        <h3>Update a Wizard </h3>
        <input
          value={id}
          onChange={e => this.setState({ id: +e.target.value })}
          type="number"
          placeholder="ID "
        />
        <div className="flex flex-column mt3">
          <input
            value={name}
            onChange={e => this.setState({ name: e.target.value })}
            type="text"
            placeholder="A description for the link"
          />
          <input
            value={image}
            onChange={e => this.setState({ image: e.target.value })}
            type="text"
            placeholder="The URL for the link"
          />
        </div>
        <Mutation mutation={UPDATE_WIZARD} variables={{ id, name, image }}>
          {(updateWizard, { data, loading, error }) => (
            <button onClick={updateWizard}>submit</button>
          )}
        </Mutation>
      </div>
    );
  }
}

export default UpdateWizard;
