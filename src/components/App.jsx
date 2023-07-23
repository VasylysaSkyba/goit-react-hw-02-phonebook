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


  render() {
    return (
    <>
    <h2>Form Contact</h2>
    <ContactForm onAdd={this.handleAddContact}/>
    </>
    )
  }
}