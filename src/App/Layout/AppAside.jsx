import { NavLink } from 'react-router-dom';

import './styles/aside.css';
import { HouseIcon } from '../Components/Icons/HouseIcon';
import { ElementIcon } from '../Components/Icons/ElementIcon';
import { EditIcon } from '../Components/Icons/EditIcon';
import { PersonalCardIcon } from '../Components/Icons/PersonalCardIcon';
import { BlogIcon } from '../Components/Icons/BlogIcon';
import { TechstackIcon } from '../Components/Icons/TechstackIcon';

import { FaqIcon } from '../Components/Icons/FaqIcon';
import { SettingIcon } from '../Components/Icons/SettingIcon';

export function AppAside() {
  return (
    <aside>
      <nav>
        <ul>
          <li>
            <NavLink className="aside-row" to="dashboard">
              <HouseIcon className="menu-icon" />
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink className="aside-row" to="my-cv">
              <PersonalCardIcon className="menu-icon" />
              Moje CV
            </NavLink>
          </li>

          <li>
            <NavLink className="aside-row" to="tech-stack">
              <TechstackIcon className="menu-icon" />
              Tech stack
            </NavLink>
          </li>

          <li>
            <NavLink className="aside-row" to="blocks">
              <ElementIcon className="menu-icon" />
              Bloki
            </NavLink>
          </li>
          <li>
            <NavLink className="aside-row" to="exercises">
              <EditIcon className="menu-icon" />
              Ćwiczenia
            </NavLink>
          </li>
          <li>
            <NavLink className="aside-row" to="blog">
              <BlogIcon className="menu-icon" />
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink className="aside-row" to="faq">
              <FaqIcon className="menu-icon" />
              FAQ
            </NavLink>
          </li>
          <hr />
          <li>
            <NavLink className="aside-row" to="settings">
              <SettingIcon className="menu-icon" />
              Ustawienia
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
