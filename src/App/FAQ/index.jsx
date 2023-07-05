import { FaqSection } from './Components/FaqSection';
import './styles.css';

export const Faq = (props) => {
  return (
    <div className="faq">
      <div>Tutaj znajdź odpowiedzi na najczęściej zadawane pytania!</div>

      <FaqSection
        question="Jak mogę zapisać się na szkolenie?"
        answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Eleifend rutrum ipsum, leo et in. Mattis porttitor volutpat placerat 
        suspendisse ante in cursus etiam ullamcorper."
      />

      <FaqSection
        question="Czy kurs jest online?"
        answer="Sollicitudin egestas 
      aliquam, adipiscing adipiscing iaculis habitant."
      />
      <FaqSection
        question="Ile czasu trwa kurs?"
        answer="Viverra pretium tincidunt 
      nisl pellentesque ut adipiscing non.Lorem ipsum dolor sit amet, consectetur 
      adipiscing elit."
      />
    </div>
  );
};
