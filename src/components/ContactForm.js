import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import styles from './contactForm.module.scss';

/*
  ⚠️ This is an example of a contact form powered with Netlify form handling.
  Be sure to review the Netlify documentation for more information:
  https://www.netlify.com/docs/form-handling/
*/

const Modal = styled.div`
  background: white;
  padding: 2em;
  border-radius: 2px;
  position: fixed;
  min-width: 75%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0 auto;
  z-index: 99;
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  transition: 0.2s all;
  opacity: ${props => (props.visible ? '1' : '0')};
  visibility: ${props => (props.visible ? 'visible' : 'hidden')};
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    min-width: inherit;
    max-width: 400px;
  }
  p {
    line-height: 1.6;
    margin: 0 0 2em 0;
  }
`;

const Button = styled.div`
  background: ${props => props.theme.colors.base};
  font-size: 1em;
  display: inline-block;
  margin: 0 auto;
  border: none;
  outline: none;
  cursor: pointer;
  color: white;
  padding: 1em;
  border-radius: 2px;
  text-decoration: none;
  transition: 0.2s;
  z-index: 99;
  &:focus {
    outline: none;
  }
  &:hover {
    background: ${props => props.theme.colors.highlight};
  }
`;

const encode = data => {
  return Object.keys(data)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&');
};

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      phone: '',
      message: '',
      showModal: false,
    };
  }

  handleInputChange = event => {
    const { target } = event;
    const { value } = target;
    const { name } = target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = event => {
    fetch('/?no-cache=1', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...this.state }),
    })
      .then(this.handleSuccess)
      .catch(error => alert(error));
    event.preventDefault();
  };

  handleSuccess = () => {
    this.setState({
      name: '',
      email: '',
      message: '',
      showModal: true,
    });
  };

  closeModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    return (
      <form
        className={styles.form}
        name="contact"
        onSubmit={this.handleSubmit}
        data-netlify="true"
        data-netlify-honeypot="bot"
        overlay={this.state.showModal}
        onClick={this.closeModal}
      >
        <input type="hidden" name="form-name" value="contact" />
        <p hidden>
          <label>
            Don’t fill this out: <input name="bot" onChange={this.handleInputChange} />
          </label>
        </p>

        <div className={styles.contactDetails}>
          <input
            className={styles.name}
            name="name"
            type="text"
            placeholder="Full Name"
            value={this.state.name}
            onChange={this.handleInputChange}
            required
          />
          <input
            className={styles.email}
            name="email"
            type="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleInputChange}
            required
          />
        </div>
        <input
          className={styles.phone}
          name="phone"
          type="phone"
          placeholder="Phone"
          value={this.state.phone}
          onChange={this.handleInputChange}
          required
        />

        <textarea
          className={styles.textarea}
          name="message"
          placeholder="Write your query here"
          value={this.state.message}
          onChange={this.handleInputChange}
          required
        />

        <button className={styles.submit} name="submit" type="submit">
          Send
        </button>

        <Modal visible={this.state.showModal}>
          <p>Thank you for reaching out. I will get back to you as soon as possible.</p>
          <Button onClick={this.closeModal}>Okay</Button>
        </Modal>
      </form>
    );
  }
}

ContactForm.propTypes = {
  data: PropTypes.object,
};

export default ContactForm;
