import Link from "next/link";

const socials = [
  {
    link: "https://www.linkedin.com/in/basile-vernouillet",
    icon: "fab fa-linkedin-in"
  },
  { link: "https://github.com/Karnak19", icon: "fab fa-github" },
  { link: "https://dev.to/karnak19", icon: "fab fa-dev" },
  { link: "https://www.instagram.com/basile_vern/", icon: "fab fa-instagram" }
];

const SocialList = props => {
  return (
    <ul className="social-list list-inline py-2 mx-auto">
      {socials.map(({ link, icon }, i) => {
        return (
          <li className="list-inline-item" key={i}>
            <a href={link}>
              <i className={icon} style={{ color: "white" }}></i>
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default SocialList;
