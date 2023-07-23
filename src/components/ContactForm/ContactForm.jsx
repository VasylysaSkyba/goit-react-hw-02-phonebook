import { Component } from 'react';
import { v4 as uuid } from 'uuid';

const INITAL_STATE = {
  name: '',
  phone: '',
};

class ContactForm extends Component {
  state = INITAL_STATE;

  handleChangeForm = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleFormSubmit = el => {
    el.preventDefault();

    const { name, phone } = this.state;
    const { onAdd } = this.props;

    const isValidateForm = this.validateForm();

    if (!isValidateForm) return;

    onAdd({ id: uuid(), name, phone });
  };

  validateForm = () => {
    const { name, phone } = this.state;
    const { onCheckUnique } = this.props;
    if (!name || !phone) {
      alert('Some filed is enpty');
      return false;
    }

    return onCheckUnique(name);
  };

  resetForm = () => this.setState(INITAL_STATE);

  render() {
    const { name, phone } = this.state;
    
    return (
      <form onSubmit={this.handleFormSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={name}
          onChange={this.handleChangeForm}
        />
        <input
          type="tel"
          name="phone"
          placeholder="Number"
          value={phone}
          onChange={this.handleChangeForm}
        />
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

export default ContactForm;
