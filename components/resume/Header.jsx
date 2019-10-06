import { useState } from "react";
import { Row, Col } from "reactstrap";
import {
  faPhoneSquare,
  faEnvelopeSquare,
  faGlobe,
  faMapMarkerAlt
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ResumeHeader = () => {
  const [contacts, setContacts] = useState([
    {
      icon: faPhoneSquare,
      label: "+33 6 58 85 15 18",
      href: "tel:#"
    },
    {
      icon: faEnvelopeSquare,
      label: "basile.vernouillet@gmail.com",
      href: "mailto:#"
    },
    {
      icon: faGlobe,
      label: "basile.vernouillet.dev",
      href: "#"
    },
    {
      icon: faMapMarkerAlt,
      label: "Bayonne"
    }
  ]);
  return (
    <div className="resume-header">
      <Row className="align-items-center">
        <Col md={8} lg={8} xl={9} xs={12} className="resume-title">
          <h2 className="resume-name mb-0 text-uppercase">
            Basile Vernouillet
          </h2>
          <div className="resume-tagline mb-3 mb-md-0">Javascript trainer</div>
        </Col>
        <Col md={4} lg={4} xl={3} xs={12} className="resume-contact">
          <ul className="list-unstyled mb-0">
            {contacts.map(({ icon, label, href }) => {
              if (href) {
                return (
                  <li className="mb-2">
                    <FontAwesomeIcon icon={icon} /> {label}
                  </li>
                );
              } else {
                return (
                  <>
                    <FontAwesomeIcon icon={icon} /> {label}
                  </>
                );
              }
            })}
          </ul>
        </Col>
      </Row>
    </div>
  );
};

export default ResumeHeader;
