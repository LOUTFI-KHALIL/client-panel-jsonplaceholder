import React, { Component } from "react";
import Contact from "./Contact";
import { Consumer } from "../context";
class Contacts extends Component {
  DeleteContact(id) {
    console.log("suppression from contacts");
    const { contacts } = this.state;
    const newListContacts = contacts.filter((contact) => contact.id !== id);
    this.setState({
      contacts: newListContacts,
    });
  }
  render() {
    return (
      <Consumer>
        {(value) => (
          <div>
            {value.contacts.map((contact) => (
              <Contact
                data={contact}
                deletContactFromChild={this.DeleteContact.bind(
                  this,
                  contact.id
                )}
                key={contact.id}
              />
            ))}
          </div>
        )}
      </Consumer>
    );
  }
}
export default Contacts;
