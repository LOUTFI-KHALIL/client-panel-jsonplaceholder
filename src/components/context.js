import React, { Component } from "react";
const Context = React.createContext();
const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_CONTACT":
      return {
        contacts: state.contacts.filter(
          (contact) => contact.id !== action.payload
        ),
      };
    case "ADD_CONTACT":
      return {
        contacts: [action.payload, ...state.contacts],
      };
    default:
      return state;
  }
};
export class Provider extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "Khalil LOUTFI",
        phone: "0667125126",
        email: "Loutfi.khalil@gmail.com",
      },
      {
        id: 2,
        name: "Youssef LOUTFI",
        phone: "0667125127",
        email: "Loutfi.youssef@gmail.com",
      },
      {
        id: 3,
        name: "ilyass LOUTFI",
        phone: "0667125128",
        email: "Loutfi.ilyass@gmail.com",
      },
    ],
    dispatch: (action) => this.setState((state) => reducer(state, action)),
  };
  render() {
    return (
      <div>
        <Context.Provider value={this.state}>
          {this.props.children}
        </Context.Provider>
      </div>
    );
  }
}
export const Consumer = Context.Consumer;
