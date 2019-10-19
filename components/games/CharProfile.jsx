import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUsers,
  faHome,
  faAngleDoubleUp,
  faFireAlt,
  faBolt,
  faServer,
  faArrowCircleRight
} from '@fortawesome/free-solid-svg-icons';

const CharProfile = ({ image, pseudo, faction, race, woWClass, ilv_max, realm, guild }) => {
  const [charDatas, setCharDatas] = useState([
    {
      icon: faHome,
      label: 'Faction',
      value: faction
    },
    {
      icon: faFireAlt,
      label: 'Race',
      value: race
    },
    {
      icon: faBolt,
      label: 'Class',
      value: woWClass
    },
    {
      icon: faAngleDoubleUp,
      label: 'iLvl',
      value: ilv_max
    },
    {
      icon: faServer,
      label: 'Realm',
      value: realm
    },
    {
      icon: faUsers,
      label: 'Guild',
      value: guild
    }
  ]);
  const [links, setLinks] = useState([
    {
      icon: faArrowCircleRight,
      url: 'https://worldofwarcraft.com/en-gb/character/hyjal/raquette',
      label: 'Official WoW website'
    },
    {
      icon: faArrowCircleRight,
      url: 'https://raider.io/characters/eu/hyjal/Raquette',
      label: 'Raider.io'
    },
    {
      icon: faArrowCircleRight,
      url: 'https://www.warcraftlogs.com/character/eu/hyjal/raquette',
      label: 'Warcraftlogs'
    },
    {
      icon: faArrowCircleRight,
      url: 'https://www.wowprogress.com/character/eu/hyjal/Raquette',
      label: 'WoW progress'
    }
  ]);
  return (
    <div className="project-meta media flex-column flex-md-row p-4 theme-bg-light">
      <img
        src={image}
        alt=""
        className="project-thumb mb-3 mb-md-0 mr-md-5 rounded d-none d-md-inline-block"
      />
      <div className="media-body">
        <div className="client-info">
          <h3 className="client-name font-weight-bold mb-4">{pseudo}</h3>
          <ul className="client-meta list-unstyled">
            {charDatas.map(({ icon, label, value }, i) => {
              return (
                <li className="mb-2" key={i}>
                  <FontAwesomeIcon icon={icon} fixedWidth className="mr-2" />
                  <strong>{label}:</strong> {value}
                </li>
              );
            })}
          </ul>
          <div className="mb-4">
            {links.map(({ icon, url, label }, i) => {
              return (
                <a
                  href={url}
                  target="_blank"
                  className="btn btn-primary mr-2 mb-3 btn-block"
                  key={i}
                >
                  <FontAwesomeIcon icon={icon} size="lg" className="mr-1" />
                  {label}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharProfile;
