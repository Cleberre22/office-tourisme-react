import React from 'react';

const Logo = () => {
    return (
      <div className="logo">
        {/* les images importées depuis la balise IMG sont accessibles dans "public" */}
        <h3>Saint</h3>
        <img src="../../../ancre1.png" alt="logo ancre" />
        <h3>Nazaire</h3>
      </div>
    );
};

export default Logo;