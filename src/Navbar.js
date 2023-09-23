import React from "react";

//main navbar component

const Navbar = () => {
  return (
    <div className="whole">
      <nav>
        <div>
          <ul className="list">
            {/* <li>
          <a href="#">Study Spree</a>
        </li> */}
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
        <div className="heading">
          <h1>Study Spree</h1>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
