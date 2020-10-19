import React, { Component } from "react";
import PropTypes from "prop-types";
import "./contacts.css";
import { Consumer } from "../context";
class Contact extends Component {
  state = {
    showContactToggle: true,
  };

  showContact(myMessage) {
    console.log("salam", myMessage);
    this.setState({
      showContactToggle: !this.state.showContactToggle,
    });
  }

  onDeleteClick = (id, dispatch) => {
    dispatch({
      type: "DELETE_CONTACT",
      payload: id,
    });
  };
  render() {
    const { name, phone, email, id } = this.props.data;

    return (
      <Consumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">
                  {name}
                  <i
                    onClick={this.showContact.bind(this, name)}
                    className="fa fa-sort-down "
                    style={{ cursor: "pointer" }}
                  ></i>
                  <i
                    style={{ color: "red", float: "right", cursor: "pointer" }}
                    className="fa fa-times"
                    onClick={this.onDeleteClick.bind(this, id, dispatch)}
                  ></i>
                </h4>
                <span className="card-text">
                  {this.state.showContactToggle ? (
                    <ul className="list-group">
                      <li className="list-group-item">{phone}</li>
                      <li className="list-group-item">{email}</li>
                    </ul>
                  ) : null}
                </span>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}
Contact.defaultProps = {
  name: "My name",
  phone: "000011111",
  email: "email@gmail.com",
};

Contact.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Contact;
