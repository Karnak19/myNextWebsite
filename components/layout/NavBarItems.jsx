import Link from 'next/link';
import { useRouter } from 'next/router';
import { NavItem, NavLink } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NavBarItem = ({ link, label, icon }) => {
  const router = useRouter();

  return (
    <NavItem style={{ cursor: 'pointer' }} active={router.pathname === link ? true : false}>
      <Link href={link}>
        <NavLink>
          {icon && <FontAwesomeIcon icon={icon} className="mr-2" fixedWidth />}
          {label}
        </NavLink>
      </Link>
    </NavItem>
  );
};

export default NavBarItem;
