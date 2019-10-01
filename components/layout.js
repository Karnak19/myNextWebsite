import { Container } from "reactstrap";

import Head from "./head";

const Layout = ({ children }) => {
  return (
    <>
      <Head />
      <Container>{children}</Container>
    </>
  );
};

export default Layout;
