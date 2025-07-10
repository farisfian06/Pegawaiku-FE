import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-primary p-4">
      <div className="container">
        <div className="flex justify-between">
          <Link to={"/"}>Pegawaiku</Link>
          <button>
            <Link
              to={"/login"}
              className="px-4 py-2 bg-secondary rounded-full text-white"
            >
              Login
            </Link>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
