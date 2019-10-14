import { useState } from 'react';
import { Row, Col } from 'reactstrap';
import {
  faPhoneSquare,
  faEnvelopeSquare,
  faGlobe,
  faMapMarkerAlt
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ResumeHeader = () => {
  const [contacts, setContacts] = useState([
    {
      icon: faPhoneSquare,
      label: '+33 6 58 85 15 18',
      href: 'tel:+33658851518'
    },
    {
      icon: faEnvelopeSquare,
      label: 'basile.vernouillet@gmail.com',
      href: 'mailto:basile.vernouillet@gmail.com#'
    },
    {
      icon: faGlobe,
      label: 'basile.vernouillet.dev',
      href: 'https://basile.vernouillet.dev'
    },
    {
      icon: faMapMarkerAlt,
      label: 'Bayonne'
    }
  ]);
  return (
    <div className="resume-header">
      <Row className="align-items-center">
        <Col md={8} lg={8} xl={9} xs={12} className="resume-title">
          <h2 className="resume-name mb-0 text-uppercase">Basile Vernouillet</h2>
          <div className="resume-tagline mb-3 mb-md-0">Javascript trainer</div>
        </Col>
        <Col md={4} lg={4} xl={3} xs={12} className="resume-contact">
          <ul className="list-unstyled mb-0">
            {contacts.map(({ icon, label, href }) => {
              if (href) {
                return (
                  <li className="mb-2">
                    <a className="resume-link" href={href}>
                      <FontAwesomeIcon icon={icon} /> {label}
                    </a>
                  </li>
                );
              } else {
                return (
                  <li className="mb-2">
                    <FontAwesomeIcon icon={icon} /> {label}
                  </li>
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
