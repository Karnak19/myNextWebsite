import { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, Nav } from 'reactstrap';
import { faUser, faLaptopCode, faFileAlt, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

import Bio from '../Bio';
import SocialList from '../SocialList';
import NavBarItem from './NavBarItems';
import NavItemGames from './NavItemGames';

const WithNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [items, setItems] = useState([
    { link: '/', icon: faUser, label: 'About me' },
    { link: '/portfolio', icon: faLaptopCode, label: 'Portfolio' },
    { link: '/resume', icon: faFileAlt, label: 'Resume' },
    { link: '/contact', icon: faPaperPlane, label: 'Contact' }
  ]);

  return (
    <>
      <Navbar expand="lg" dark>
        <NavbarToggler onClick={() => setIsOpen(!isOpen)} />
        <Collapse id="navigation" className="flex-column" isOpen={isOpen} navbar>
          <div className="profile-section pt-3 pt-lg-0">
            <img
              className="pofile-image mb-3 rounded-circle mx-auto"
              src="/static/portrait.webp"
              alt=""
            />
            <Bio mb="3">
              Hi, my name is Basile Vernouillet and I'm a React & NodeJS trainer. Welcome to my
              personal website!
            </Bio>
            <SocialList />
            <hr />
          </div>
          <Nav className="flex-column text-left" navbar>
            {items.map((item, i) => {
              return <NavBarItem {...item} key={i} />;
            })}
            <NavItemGames />
          </Nav>
        </Collapse>
      </Navbar>
    </>
  );
};

export default WithNavbar;
