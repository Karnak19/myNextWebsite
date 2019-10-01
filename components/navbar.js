import { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
import Link from "next/link";

import Bio from "./bio";

const WithNavbar = props => {
  const [isOpen, setIsOpen] = useState(false);
  const [items, setItems] = useState([
    { link: "/portfolio", label: "Portfolio" },
    { link: "/resume", label: "Resume" }
  ]);
  return (
    <>
      <Navbar expand="lg" dark>
        <NavbarToggler onClick={() => setIsOpen(!isOpen)} />
        <Collapse
          id="navigation"
          className="flex-column"
          isOpen={isOpen}
          navbar
        >
          <div class="profile-section pt-3 pt-lg-0">
            <img
              class="pofile-image mb-3 rounded-circle mx-auto"
              src="/static/portrait.jpg"
              alt=""
            />
            <Bio>
              Hi, my name is Basile Vernouille and I'm a React & NodeJS trainer.
              Welcome to my personal website!
            </Bio>
          </div>
          <Nav className="flex-column text-left" navbar>
            {items.map(({ link, label }, i) => {
              return (
                <NavItem>
                  <Link href={link}>
                    <NavLink>{label}</NavLink>
                  </Link>
                </NavItem>
              );
            })}
          </Nav>
        </Collapse>
      </Navbar>
    </>
  );
};

export default WithNavbar;
