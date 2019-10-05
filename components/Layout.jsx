import Head from "./head";
import Header from "./Header";
import Footer from "./Footer";
import "@fortawesome/fontawesome-svg-core/styles.css";

const Layout = ({ children }) => {
  return (
    <>
      <Head />
      <Header />
      <div className="main-wrapper">
        {children}
        <Footer />
      </div>
    </>
  );
};

export default Layout;
