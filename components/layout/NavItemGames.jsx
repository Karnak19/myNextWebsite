import { useState } from 'react';
import Link from 'next/link';
import { NavItem, NavLink } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGamepad } from '@fortawesome/free-solid-svg-icons';

const NavItemGames = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [dropDownItems, setDropDownItems] = useState([
    {
      link: '/wow',
      label: 'World of Warcraft'
    },
    {
      link: '/apex',
      label: 'Apex Legends'
    }
  ]);

  return (
    <NavItem style={{ cursor: 'pointer' }} className={`dropdown ${isDropdownOpen ? `show` : null}`}>
      <NavLink onClick={() => setIsDropdownOpen(!isDropdownOpen)} className="dropdown-toggle">
        <FontAwesomeIcon icon={faGamepad} className="mr-2" fixedWidth />
        See more
      </NavLink>
      <div className={`dropdown-menu ${isDropdownOpen ? `show` : ``}`}>
        {dropDownItems.map(({ link, label }, i) => {
          return (
            <Link href={link} key={i}>
              <a className="dropdown-item">{label}</a>
            </Link>
          );
        })}
      </div>
    </NavItem>
  );
};

export default NavItemGames;
