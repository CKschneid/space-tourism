import { useState, useEffect } from "react";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const GlobalNav = () => {
  const [width, setWindowWidth] = useState(0);

  const updateDimensions = () => {
    const width = window.innerWidth;
    setWindowWidth(width);
  };

  useEffect(() => {
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  return <>{width >= 588 ? <Nav /> : <MobileNav />}</>;
};

export default GlobalNav;
