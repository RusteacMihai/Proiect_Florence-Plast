import React, { useState, useEffect } from "react";
import "../Footer/Footer.styled.css";

const Footer = () => {
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    function isAtPageBottom() {
      return window.innerHeight + window.scrollY >= document.body.offsetHeight;
    }

    function handleScroll() {
      if (isAtPageBottom()) {
        setShowFooter(true);
      } else {
        setShowFooter(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <footer className={`Footer ${showFooter ? "show" : ""}`}>
     
      <p className="ParagrafFooter">
        &copy; 2024 Florence Plast. Toate drepturile rezervate.
      </p>
    </footer>
  );
};

export default Footer;