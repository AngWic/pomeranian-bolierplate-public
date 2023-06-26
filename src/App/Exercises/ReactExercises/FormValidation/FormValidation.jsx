import React, { useState } from 'react';
import './styles.css';

const containsUppercase = (str) => {
  return /[A-Z]/.test(str);
};

const regexEmail = (str) => {
  const regex = new RegExp(
    '/^([a-zA-Z0-9])+([a-zA-Z0-9._-])*@([a-zA-Z0-9_-])+([a-zA-Z0-9._-]+)+$/' //do poprawienia
  );
  return regex.test(str);
};

export function FormValidation() {
  const [error, setError] = useState('');

  const validPassword = (pswrd, pswrdRpt) => {
    if (pswrd !== pswrdRpt) {
      setError('Hasło nieprawidłowe');
      return false;
    }
    if (!containsUppercase(pswrd)) {
      setError('Hasło nie zawiera wielkiej litery');
      return false;
    }
    if (pswrd.length < 10) {
      setError('Hasło jest za krótkie');
      return false;
    }
    setError('');
    return true;
  };

  const validEmail = (mail) => {
    if (!mail) {
      setError('Brak e-mail');
      return false;
    }
    if (!regexEmail(mail)) {
      setError('Błędny e-mail');
      return false;
    }
    setError('');
    return true;
  };

  const sendFormData = (data) => {
    data.preventDefault();

    const password = data.target.password.value;
    const passwordRepeat = data.target.passwordRepeat.value;
    const email = data.target.email.value;

    if (validPassword(password, passwordRepeat) && validEmail(email)) {
      console.log('ok');
    } else {
      console.log('error');
    }
  };

  return (
    <div>
      <h2>Validation for password</h2>
      <div>
        <form className="validation-form" onSubmit={sendFormData}>
          <div>
            <span>Adres e-mail: </span>
            <input
              type="email"
              id="validation-email"
              placeholder="lorem_ipsum@gmail.com"
              required
            />
          </div>
          <div>
            <label htmlFor="check-password">Type password: </label>

            <input
              type="password"
              id="check-password"
              name="password"
              // pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              required
            />
          </div>
          <div>
            <label htmlFor="check-repeated-password">Repeat password: </label>

            <input
              type="password"
              id="check-repeated-password"
              name="passwordRepeat"
              // pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              required
            />
          </div>
          <br />
          <p className="validation-error-msg">{error}</p>
          <br />

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
