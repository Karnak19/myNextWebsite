import Head from "./head";
import Header from "./header";
import Footer from "./footer";

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
