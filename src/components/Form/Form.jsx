import PropTypes from 'prop-types';
import css from './Form.module.css';
import { useState } from 'react';
export const ContactForm = ({onFormSubmit , btnText}) => {
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')


  const inputChange = event => {
    switch (event.target.name){
      case 'name':
        setName(event.target.value)
      break;
      case 'number' : 
        setNumber(event.target.value)
      break;
      default: console.log('er');
    }

  };
  

    const handleSubmit = event => {
    event.preventDefault();
    onFormSubmit({name, number});
    event.target.reset();
  };

    return (
      <form className = {css.form}  onSubmit={  handleSubmit }>
        <h3>Name</h3>
        <input
        className={css.input}
        type="text"
        name="name"
        onChange={inputChange}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required />

        <h3>Number</h3>
        <input
        className={css.input}
        type="tel"
        name="number"
        onChange={inputChange}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required />
      <button className={css.button} type="submit"> {btnText} </button>
    </form>
    );
}


ContactForm.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
  btnText: PropTypes.string
};