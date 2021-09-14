import React, { Component } from "react";
import shortid from "shortid";

import ContactList from "./Components/ContactList/ContactList";
import ContactForm from "./Components/ContactForm/ContactForm";
import Filter from "./Filter/Filter";

import "./App.css";

class App extends Component {
  state = {
    contacts: [],
    filter: "",
  };

  addNewContact = (person) => {
    const contact = {
      id: shortid.generate(),
      name: person.name,
      number: person.number,
    };

    this.setState((prevState) => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };

  findFilterValue = (e) => {
    this.setState({
      filter: e.target.value,
    });
  };

  removeContact = (name) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((pers) => pers.name !== name),
    }));
  };

  render() {
    const normalizeFilter = this.state.filter.toLowerCase();
    const filterCurrentTel = this.state.contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizeFilter)
    );

    return (
      <div className="wrap">
        <h1 className="title">Phonebook</h1>
        <ContactForm
          filterContact={filterCurrentTel}
          onAdd={this.addNewContact}
        />
        <h2 className="title">Contacts</h2>
        <Filter filter={this.state.filter} onFilter={this.findFilterValue} />
        <ContactList
          contacts={filterCurrentTel}
          onDeleteContact={this.removeContact}
        />
      </div>
    );
  }
}

export default App;
