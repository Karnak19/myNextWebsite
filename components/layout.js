import Head from "./head";
import Header from "./header";

const Layout = ({ children }) => {
  return (
    <>
      <Head />
      <Header />
      <div class="main-wrapper">{children}</div>
    </>
  );
};

export default Layout;
