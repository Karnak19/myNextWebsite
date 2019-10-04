import Head from "./head";
import Header from "./header";
import Footer from "./footer";
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
