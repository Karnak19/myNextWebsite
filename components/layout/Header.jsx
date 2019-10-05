import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="header text-center">
      <div className="force-overflow">
        <h1 className="blog-name pt-lg-4 mb-0">Basile Vernouillet</h1>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
