import './styles.css';
import { useState } from 'react';

export const Forms = () => {
  //formy płatności:

  const [payment, setPayment] = useState('blik');
  //--------poprzednia wersja---------
  // const [blik, setBlik] = useState(false);
  // const [paypal, setPaypal] = useState(false);
  // const [transfer, setTransfer] = useState(false);

  //dodatkowe opcje:
  const [optionEnvironment, setOptionEnvironment] = useState(true);
  const [optionGithub, setOptionGithub] = useState(false);
  const [optionExtras, setOptionExtras] = useState(true);

  //dane do zamówienia:
  const [name, setName] = useState('');
  const [type, setType] = useState('');

  //założenie konta + hasło:
  const [userAccount, setUserAccount] = useState(false);

  //regulamin + newsletter:
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [newsletter, setNewsletter] = useState(false);

  const sendFormData = (e) => {
    e.preventDefault();
    console.log('name: ', name);
    console.log('type: ', type);
    console.log('payment', payment);
  };

  return (
    <div className="forms">
      <form onSubmit={sendFormData}>
        <h2>Zamówienie produktu</h2>

        <h4>Wybierz produkt*</h4>
        <select
          className="forms-input-order-data"
          name="select-course"
          onChange={(event) => setType(event.target.value)}
        >
          <option>--rozwiń listę--</option>

          <option value="front-end">Kurs front-end developer</option>
          <option value="back-end">Kurs back-end developer</option>
          <option value="tester">Kurs dla testerów</option>
        </select>
        <br />

        <h4>Wybierz formę płatności*</h4>
        <div>
          <input
            type="radio"
            id="payment-blik"
            name="payment"
            checked={payment === 'blik'}
            value="blik"
            onChange={(e) => setPayment(e.target.value)}
          />
          <label htmlFor="payment-blik">Blik</label>
        </div>
        <div>
          <input
            type="radio"
            id="payment-paypal"
            name="payment"
            checked={payment === 'paypal'}
            value="paypal"
            onChange={(e) => setPayment(e.target.value)}
          />
          <label htmlFor="payment-paypal">Paypal</label>
        </div>
        <div>
          <input
            type="radio"
            id="payment-transfer"
            name="payment"
            checked={payment === 'transfer'}
            value="transfer"
            onChange={(e) => setPayment(e.target.value)}
          />
          <label htmlFor="payment-transfer">Przelew tradycyjny</label>
        </div>
        <br />

        <h4>Opcje dodatkowe do zamówienia</h4>
        <div>
          <input
            className="forms-checkbox-icon"
            type="checkbox"
            id="order-1"
            name="order-1"
            checked={optionEnvironment}
            onChange={() => setOptionEnvironment(!optionEnvironment)}
          />
          <label htmlFor="order-1">ustawienie środowiska</label>
        </div>
        <div>
          <input
            className="forms-checkbox-icon"
            type="checkbox"
            id="order-2"
            name="order-2"
            checked={optionGithub}
            onChange={() => setOptionGithub(!optionGithub)}
          />
          <label htmlFor="order-2">intro do GitHub</label>
        </div>
        <div>
          <input
            className="forms-checkbox-icon"
            type="checkbox"
            id="order-3"
            name="order-3"
            checked={optionExtras}
            onChange={() => setOptionExtras(!optionExtras)}
          />
          <label htmlFor="order-3">materiały dodatkowe</label>
        </div>
        <br />
        <br />

        <h2>Dane do realizacji zamówienia</h2>

        <h4>Imię i nazwisko*</h4>
        <input
          value={name}
          onChange={(event) => setName(event.target.value)}
          className="forms-input-order-data"
          type="text"
          placeholder="wpisz swoje imię i nazwisko"
          required
        />
        <h4>Twój pseudonim*</h4>
        <input
          className="forms-input-order-data"
          type="text"
          placeholder="LoremIpsum"
          required
        />
        <h4>Adres do wysyłki*</h4>
        <input
          className="forms-input-order-data"
          type="text"
          placeholder="ulica, numer domu/ mieszkania, kod pocztowy, miasto"
        />
        <h4>Adres e-mail*</h4>
        <input
          className="forms-input-order-data"
          type="email"
          placeholder="lorem_ipsum@gmail.com"
          required
        />
        <h4>Numer kontaktowy*</h4>
        <input
          className="forms-input-order-data"
          type="tel"
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{3}"
          placeholder="888-888-888"
          required
        />
        <h4>Dodatkowe uwagi do zamówienia</h4>
        <textarea
          className="forms-textarea-order-data"
          type="text"
          placeholder="Jeśli masz jakieś uwagi, wpisz je tutaj..."
          cols={51}
          rows={10}
        />
        <br />

        <h2>Zakładanie konta</h2>
        <h4>Chcę założyć konto razem z zamówieniem</h4>
        <input
          className="forms-checkbox-icon"
          type="checkbox"
          id="user-account"
          name="user-account"
          value="Account"
          onChange={() => setUserAccount(userAccount)}
        />
        <label htmlFor="user-account"> zakładam konto</label>
        <br />
        <br />

        <label htmlFor="pwd">Moje hasło</label>
        <br />
        <input
          className="forms-input-order-data"
          type="password"
          id="pwd"
          name="pwd"
        />
        <br />
        <br />
        <label htmlFor="pwd">Powtórz hasło</label>
        <br />
        <input
          className="forms-input-order-data"
          type="password"
          id="rpt-pwd"
          name="rpt-pwd"
        />

        <br />
        <br />
        <h2>Zgody i newsletter</h2>
        <h4>Realizując zamówienie, akceptujesz regulamin naszego sklepu</h4>
        <input
          className="forms-checkbox-icon"
          type="checkbox"
          id="accept-terms"
          name="accept-terms"
          value="Terms"
          onChange={() => setAcceptTerms(acceptTerms)}
          required
        />
        <label className="forms-label-terms" htmlFor="accept-terms">
          {' '}
          akceptuję regulamin*
        </label>
        <br />
        <span className="forms-span-terms">Pole obowiązkowe!</span>
        <br />
        <br />
        <h4>Dołącz do naszego newslettera z promocjami dla naszych klientów</h4>
        <input
          className="forms-checkbox-icon"
          type="checkbox"
          id="newsletter"
          name="newsletter"
          value="Newsletter"
          onChange={() => setNewsletter(newsletter)}
        />
        <label htmlFor="newsletter"> zapisuję się na listę mailingową</label>
        <br />
        <br />

        <button className="forms-button-order" type="submit">
          SKŁADAM ZAMÓWIENIE
        </button>
        <br />
        <br />
        <hr />
        <div className="forms-required-field-info">
          *Pola obowiązkowe, niezbędne w celu realizacji zamówienia
        </div>
      </form>
    </div>
  );
};

{
  /* <div>
        <input type="button" />
        <br />
        <input type="checkbox" />
        <br />
        <input type="color" />
        <br />
        <input type="date" />
        <br />
        <input type="datetime-local" />
        <br />
        <input type="email" />
        <br />
        <input type="file" />
        <br />
        <input type="hidden" />
        <br />
        <input type="image" />
        <br />
        <input type="month" />
        <br />
        <input type="number" />
        <br />
        <input type="password" />
        <br />
        <input type="radio" />
        <br />
        <input type="range" />
        <br />
        <input type="reset" />
        <br />
        <input type="search" />
        <br />
        <input type="submit" />
        <br />
        <input type="tel" />
        <br />
        <input type="text" />
        <br />
        <input type="time" />
        <br />
        <input type="url" />
        <br />
        <input type="week" />
      </div> */
}
