import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faLaptopCode,
  faFileAlt,
  faPaperPlane
} from "@fortawesome/free-solid-svg-icons";

import Bio from "./bio";
import SocialList from "./socialList";

const WithNavbar = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [items, setItems] = useState([
    { link: "/", icon: faUser, label: "About me" },
    { link: "/portfolio", icon: faLaptopCode, label: "Portfolio" },
    { link: "/resume", icon: faFileAlt, label: "Resume" },
    { link: "/contact", icon: faPaperPlane, label: "Contact me" }
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
                          <FontAwesomeIcon icon={icon} size="lg" />
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
