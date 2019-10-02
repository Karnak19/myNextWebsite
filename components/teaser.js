import Link from "next/link";

import Section from "./section";
import Bio from "./bio";

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
                <i className="fas fa-arrow-circle-right mr-1"></i> See Portfolio
              </a>
            </Link>
            <Link href="/resume">
              <a className="btn btn-secondary mb-3">
                <i className="fas fa-file-alt mr-1"></i> See Resume
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
