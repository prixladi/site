import React from 'react';

import './ContactForm.css';

const submitFormAsync = async (event) => {
  event.preventDefault();
  var data = new FormData(event.target);

  let i = 0;
  data.forEach(function (value, key) {
    if (value) i++;
  });

  if (i > 0) {
    await fetch('http://server.ladislavprix.cz/mail.php', {
      method: 'POST',
      body: data,
    });
  }
  document.getElementById("contact-form").reset();
  return i > 0;
};

const ContactForm = () => (
  <>
    <h2>You can contact me via this form.</h2>
    <p>
      You can send me a message using form below. You should specify your email
      so I can contact you back.
    </p>
    <form id="contact-form" action='#' onSubmit={submitFormAsync}>
      <input
        name='name'
        type='text'
        className='feedback-input header'
        placeholder='Name'
      />
      <input
        name='email'
        type='text'
        className='feedback-input header'
        placeholder='Email'
      />
      <textarea
        name='message'
        className='feedback-input'
        placeholder='Message'
      ></textarea>
      <input type='submit' value='Send Message' />
    </form>
  </>
);

export { ContactForm };
