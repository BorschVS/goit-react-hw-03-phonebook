import React, { Component } from 'react';
import css from './ContactForm.module.css';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  resetForm = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { onSubmit, contains } = this.props;
    const { name } = this.state;

    contains(name)
      ? alert(`${name} is already in contacts`)
      : onSubmit(this.state);

    !contains(name) && this.resetForm();
  };

  render() {
    return (
      <form className={css.Form} onSubmit={this.handleSubmit}>
        <label className={css.Form__label}>
          Name
          <input
            className={css.Form__input}
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            required
          />
        </label>

        <label className={css.Form__label}>
          Number
          <input
            className={css.Form__input}
            type="tel"
            name="number"
            value={this.state.number}
            onChange={this.handleChange}
            required
          />
        </label>

        <button className={css.Form__button} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

export default ContactForm;
