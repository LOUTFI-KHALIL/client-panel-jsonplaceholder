import React, { Component } from "react";
import axios from "axios";
import { Consumer } from "../context";
import TextInputGroup from "../helpers/TextInputGroup";
class EditContact extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    errors: {},
  };
  async componentDidMount() {
    const id = this.props.match.params.id;
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    this.setState({
      name: res.data.name,
      email: res.data.email,
      phone: res.data.phone,
    });
  }
  onChangeInput = (e) => this.setState({ [e.target.name]: e.target.value });
  submit = async (dispatch, size, e) => {
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
    const upContact = {
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone,
    };

    try {
      const id = this.props.match.params.id;
      const res = await axios.put(
        `https://jsonplaceholder.typicode.com/users/${id}`,
        upContact
      );
      dispatch({
        type: "UPDATE_CONTACT",
        payload: res.data,
      });
    } catch (e) {
      alert(e);
    }

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
                    <h4 className="card-title">Edit Contact</h4>
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

                      <button className="btn btn-danger btn-block">
                        Edit Contact
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
export default EditContact;
