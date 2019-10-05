import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedinIn,
  faDev,
  faGithub,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

const socials = [
  {
    link: "https://www.linkedin.com/in/basile-vernouillet",
    icon: faLinkedinIn
  },
  { link: "https://github.com/Karnak19", icon: faGithub },
  { link: "https://dev.to/karnak19", icon: faDev },
  { link: "https://www.instagram.com/basile_vern/", icon: faInstagram }
];

const SocialList = () => {
  return (
    <ul className="social-list list-inline py-2 mx-auto">
      {socials.map(({ link, icon }, i) => {
        return (
          <li className="list-inline-item" key={i}>
            <a href={link} rel="nofollow noopener noreferrer" target="_blank">
              <FontAwesomeIcon icon={icon} size="1x" />
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default SocialList;
