import { useState, useEffect } from "react";
import Home from "./Home";
import Flow from "./Flow";

const Final = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return <div>{isMobile ? <Flow /> : <Home />}</div>;
};

export default Final;
