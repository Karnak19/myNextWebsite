import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileAlt,
  faArrowCircleRight
} from "@fortawesome/free-solid-svg-icons";

import Section from "./Section";
import Bio from "./Bio";

const Teaser = ({ name, job }) => {
  return (
    <Section section="about-me">
      <div className="profile-teaser media flex-column flex-lg-row">
        <div className="media-body">
          <h2 className="name font-weight-bold mb-1">{name}</h2>
          <div className="tagline mb-3">{job}</div>
          <Bio mb="4">
            I'm a web developer specialised in Frontend & Backend development on
            Javascript applications.
          </Bio>
          <div className="mb-4">
            <Link href="/portfolio">
              <a className="btn btn-primary mr-2 mb-3">
                <FontAwesomeIcon
                  icon={faArrowCircleRight}
                  size="lg"
                  className="mr-1"
                />{" "}
                See Portfolio
              </a>
            </Link>
            <Link href="/resume">
              <a className="btn btn-secondary mb-3">
                <FontAwesomeIcon icon={faFileAlt} size="lg" className="mr-1" />{" "}
                See Resume
              </a>
            </Link>
          </div>
        </div>
        <img
          className="profile-image mb-3 mb-lg-0 ml-lg-5 mr-md-0"
          src="/static/teaser.jpg"
          alt=""
        />
      </div>
    </Section>
  );
};

export default Teaser;
