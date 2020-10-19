import React, { Component } from "react";
import { Consumer } from "../context";
import TextInputGroup from "../helpers/TextInputGroup";
class AddContact extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    errors: {},
  };
  onChangeInput = (e) => this.setState({ [e.target.name]: e.target.value });
  submit = (dispatch, size, e) => {
    e.preventDefault();
    const { name, phone, email } = this.state;

    if (name == "") {
      this.setState({ errors: { name: "the name is required !" } });
      return;
    }
    if (email == "") {
      this.setState({ errors: { email: "the email is required !" } });
      return;
    }
    if (phone == "") {
      this.setState({ errors: { phone: "the phone is required !" } });
      return;
    }

    dispatch({
      type: "ADD_CONTACT",
      payload: {
        id: Math.random,
        name: this.state.name,
        email: this.state.email,
        phone: this.state.phone,
      },
    });
    this.setState({
      name: "",
      email: "",
      phone: "",
      errors: {},
    });
    this.props.history.push("/");
  };

  render() {
    const { email, phone, name, errors } = this.state;

    return (
      <Consumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <div>
              <form
                onSubmit={this.submit.bind(
                  this,
                  dispatch,
                  value.contacts.lenght
                )}
              >
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title">Add Contact</h4>
                    <div className="card-text">
                      <TextInputGroup
                        label="Name"
                        type="text"
                        name="name"
                        value={name}
                        onChange={this.onChangeInput}
                        error={errors.name}
                      />
                      <TextInputGroup
                        label="Email"
                        type="email"
                        name="email"
                        value={email}
                        onChange={this.onChangeInput}
                        error={errors.email}
                      />
                      <TextInputGroup
                        label="Phone"
                        type="text"
                        name="phone"
                        value={phone}
                        onChange={this.onChangeInput}
                        error={errors.phone}
                      />

                      <button className="btn btn-success btn-block">
                        Add +
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          );
        }}
      </Consumer>
    );
  }
}
export default AddContact;
