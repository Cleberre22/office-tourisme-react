import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to={`/home`}>
      <div className="logo">
        {/* les images importées depuis la balise IMG sont accessibles dans "public" */}
        <h3>Saint</h3>
        <img src="../../../ancre1.png" alt="logo ancre" />
        <h3>Nazaire</h3>
      </div>
    </Link>
  );
};

export default Logo;
