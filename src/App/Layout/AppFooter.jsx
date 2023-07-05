import './styles/footer.css';

const email = 'angelika.wicka@pomeranianstartit.pl';
const phone = '+48-695-021-070';

export function AppFooter() {
  return (
    <footer>
      <div>
        Projekt uzyskał dofinansowanie ze środków Unii Europejskiej z
        Europejskiego Funduszu Rozwoju
      </div>
      <a href={`mailto:${email}`}>{`Email: ${email}`}</a>
      <div>
        Regionalnego w ramach projektu grantowego „Invest in Pomerania 2020”.
      </div>
      <a href={`tel:${phone}`}>{`Tel: ${phone}`}</a>
    </footer>
  );
}
