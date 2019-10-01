import { useEffect } from "react";
import ThemeNavBar from "./navbar";

const Header = () => {
  return (
    <header class="header text-center">
      <div class="force-overflow">
        <h1 class="blog-name pt-lg-4 mb-0">Basile Vernouillet</h1>
        <ThemeNavBar />
      </div>
    </header>
  );
};

export default Header;
