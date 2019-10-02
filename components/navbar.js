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
import { useRouter } from "next/router";

import Bio from "./bio";
import SocialList from "./socialList";

const WithNavbar = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [items, setItems] = useState([
    { link: "/", icon: "fas fa-user", label: "About me" },
    { link: "/portfolio", icon: "fas fa-laptop-code", label: "Portfolio" },
    { link: "/resume", icon: "fas fa-file-alt", label: "Resume" },
    { link: "/contact", icon: "fas fa-paper-plane", label: "Contact me" }
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
          <div className="profile-section pt-3 pt-lg-0">
            <img
              className="pofile-image mb-3 rounded-circle mx-auto"
              src="/static/portrait.jpg"
              alt=""
            />
            <Bio mb="3">
              Hi, my name is Basile Vernouillet and I'm a React & NodeJS
              trainer. Welcome to my personal website!
            </Bio>
            <SocialList />
            <hr />
          </div>
          <Nav className="flex-column text-left fa-ul" navbar>
            {items.map(({ link, label, icon }, i) => {
              return (
                <NavItem
                  key={i}
                  style={{ cursor: "pointer" }}
                  active={router.pathname === link ? true : false}
                >
                  <Link href={link}>
                    <NavLink>
                      {icon ? (
                        <span className="fa-li">
                          <i className={icon}></i>
                        </span>
                      ) : null}
                      {label}
                    </NavLink>
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
