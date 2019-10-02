import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer text-center py-4">
      <small className="copyright">
        Basile Vernouillet |{" "}
        <Link href="/">
          <a>2019</a>
        </Link>
      </small>
    </footer>
  );
};

export default Footer;
