import { Component } from "react";

import ContactForm from "./ContactForm";

export default class App extends Component {
state = {
  contacts: [],
}

handleAddContact = (newContact) =>
this.setState(({ contacts }) => ({
  contacts: [...contacts, newContact],
}))


handleCheckUniqueContact = (name) => {
  const { contacts } = this.state;

  const isExsistContact = !!contacts.find(contact => contact.name === name)

  isExsistContact && alert('Contact is already exist')

  return !isExsistContact

}

  render() {
    return (
    <>
    <h2>Form Contact</h2>
    <ContactForm onAdd={this.handleAddContact}/>
    </>
    )
  }
}