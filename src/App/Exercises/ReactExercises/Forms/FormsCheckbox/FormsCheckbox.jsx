export default function FormsCheckbox({
  options,
  selectedOption,
  onSelect,
  onChange,
}) {
  return (
    <div>
      {options.map(({ value, label }) => {
        return (
          <div key={value}>
            <input
              className="forms-checkbox-icon"
              type="checkbox"
              id={`checkbox-${value}`}
              name={value}
              checked={selectedOption}
              onChange={() => onSelect(!selectedOption)}
            />
            <label htmlFor={`checkbox-${value}`}>{label}</label>
          </div>
        );
      })}
    </div>
  );
}

// eslint-disable-next-line no-lone-blocks
{
  /* <div>
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
        </div> */
}
