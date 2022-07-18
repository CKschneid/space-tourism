import { useState, useEffect } from "react";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const GlobalNav = () => {
  console.log(props.theme);
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

  return <>{width >= 450 ? <Nav /> : <MobileNav />}</>;
};

export default GlobalNav;
