import React, { useState } from 'react';
import './styles.css';

const containsUppercase = (str) => {
  return /[A-Z]/.test(str);
};

const containsEmail = (str) => {
  const regexExp =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/gi;
  return regexExp.test(str);
};

export function FormValidation() {
  const [error, setError] = useState('');

  const isPasswordValid = (pass, repeat) => {
    if (pass !== repeat) {
      setError('Hasła nieprawidłowe');
      return false;
    }
    if (!containsUppercase(pass)) {
      setError('Brak wielkiej litery');
      return false;
    }
    if (pass.length < 10) {
      setError('Haslo za krotkie');
      return false;
    }
    setError('');
    return true;
  };

  const isEmailValid = (mail) => {
    if (!mail) {
      setError('Brak maila');
      return false;
    }
    if (!containsEmail(mail)) {
      setError('Mail bledny');
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

    if (isPasswordValid(password, passwordRepeat) && isEmailValid(email)) {
      console.log('OK');
    } else {
      console.log('Error');
    }
  };

  return (
    <div className="forms-validation">
      <form className="form" onSubmit={sendFormData}>
        <input type="email" placeholder="Wpisz email" name="email" />
        <br /> <br />
        <input
          type="password"
          placeholder="Wpisz hasło"
          name="password"
          pattern=""
          required
        />
        <br /> <br />
        <input
          type="password"
          placeholder="Powtórz hasło"
          name="passwordRepeat"
          required
        />
        <br /> <br />
        {error || '---'}
        <br /> <br />
        <button type="submit">Zapisz</button>
      </form>
    </div>
  );
}
