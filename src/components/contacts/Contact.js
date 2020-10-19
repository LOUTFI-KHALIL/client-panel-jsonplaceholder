import React, { Component } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import "./contacts.css";
import { Consumer } from "../context";
import { Link } from "react-router-dom";
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

  onDeleteClick = async (id, dispatch) => {
    try {
      const res = await axios.delete(
        "https://jsonplaceholder.typicode.com/users/" + id
      );
      dispatch({
        type: "DELETE_CONTACT",
        payload: id,
      });
    } catch (e) {
      alert(e);
    }
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

                  <Link to={`/contacts/edit/${id}`}>
                    <i
                      className="fa fa-pencil"
                      style={{
                        color: "orange",
                        float: "right",
                        cursor: "pointer",
                        marginLeft: "8px",
                      }}
                    ></i>
                  </Link>
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
