import './styles.css';

import { ElementIconDash } from './Icons/ElementIconDash';
import { EditIconDash } from './Icons/EditIconDash';
import { PersonalCardIconDash } from './Icons/PersonalCardIconDash';
import { BlogIconDash } from './Icons/BlogIconDash';

export const DashboardView = () => {
  return (
    <div className="dashboard">
      <h3 className="dashboard-header">Cześć, tu Angelika!</h3>
      <p>
        Poniżej znajdziesz najważniejsze informacje na temat mojej działalności.
      </p>
      <nav className="dashboard-view">
        <div className="dashboard-block">
          <div>Moje CV</div>
          <div>
            <PersonalCardIconDash className="dashboard-icon" />
          </div>
          <div className="dashboard-block-content">
            podgląd cv wraz z doświadczeniem
          </div>
          <a className="dashboard-link" href="/my-cv">
            zobacz więcej &#62;
          </a>
        </div>
        <div className="dashboard-block">
          <div>Bloki</div>
          <div>
            <ElementIconDash className="dashboard-icon" />
          </div>
          <div className="dashboard-block-content">
            zagadnienia omawiane na zajęciach
          </div>

          <a className="dashboard-link" href="/blocks">
            zobacz więcej &#62;
          </a>
        </div>
        <div className="dashboard-block">
          <div>Ćwiczenia</div>
          <div>
            <EditIconDash className="dashboard-icon" />
          </div>
          <div className="dashboard-block-content">
            wszystkie wykonane ćwiczenia
          </div>
          <a className="dashboard-link" href="/exercises">
            zobacz więcej &#62;
          </a>
        </div>
        <div className="dashboard-block">
          <div>Blog</div>
          <div>
            <BlogIconDash className="dashboard-icon" />
          </div>
          <div className="dashboard-block-content">
            przykładowy blog z content'em
          </div>
          <a className="dashboard-link" href="/blog">
            zobacz więcej &#62;
          </a>
        </div>
      </nav>
    </div>
  );
};
