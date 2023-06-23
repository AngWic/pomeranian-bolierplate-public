export default function RadioButtons({
  options,
  selectedOption,
  onSelect,
  groupName,
}) {
  return (
    <div>
      {options.map(({ value, label }) => {
        return (
          <div key={value}>
            <input
              type="radio"
              id={`radio-${value}`}
              name={groupName}
              checked={selectedOption === value}
              value={value}
              onChange={(event) => onSelect(event.target.value)}
            />
            <label htmlFor={`radio-${value}`}>{label}</label>
          </div>
        );
      })}
    </div>
  );
}

{
  //-----poprzednia wersja:------
  /* <div>
        <input
          type="radio"
          id="payment-blik"
          name="payment"
          checked={selectedOption === 'blik'}
          value="blik"
          onChange={(e) => onSelect(e.target.value)}
        />
        <label htmlFor="payment-paypal">Blik</label>
      </div>
      <div>
        <input
          type="radio"
          id="payment-paypal"
          name="payment"
          checked={selectedOption === 'paypal'}
          value="paypal"
          onChange={(e) => onSelect(e.target.value)}
        />
        <label htmlFor="payment-paypal">Paypal</label>
      </div>
      <div>
        <input
          type="radio"
          id="payment-transfer"
          name="payment"
          checked={selectedOption === 'transfer'}
          value="transfer"
          onChange={(e) => onSelect(e.target.value)}
        />
        <label htmlFor="payment-transfer">Przelew tradycyjny</label>
      </div>
    </div>
  );
} */
}
