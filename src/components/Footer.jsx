import React from "react";

const Footer = () => {
  const today = new Date();

  return (
    <footer>
      <p>Mariela Mihilova /Mari/ * Copyright &copy; {today.getFullYear()}</p>
    </footer>
  );
};

export default Footer;
