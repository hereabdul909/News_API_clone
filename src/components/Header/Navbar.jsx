import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import "./Navbar.css";
const Li = styled.li`
  margin-inline: 1.3rem;
  font-weight: 800;
  margin-top: 1rem;
  cursor: pointer;
  @media (max-width: 900px) {
    margin-inline: 0.5rem;
  }
  &:hover {
    text-decoration: underline;
  }
`;
function Navbar() {
  const [navClass, setNavClass] = useState("container-xl");
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setNavClass("container-fluid top");
      } else {
        setNavClass("container-xl");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`${navClass}`} >
      <ul className="d-flex justify-content-center p-md-1 list-unstyled menu">
        <Link className="text-decoration-none text-dark" to="/">
          <Li>World</Li>
        </Link>
        <Link className="text-decoration-none text-dark" to="/general">
          <Li>General</Li>
        </Link>
        <Link className="text-decoration-none text-dark" to="/business">
          <Li>Business</Li>
        </Link>
        <Link className="text-decoration-none text-dark" to="/sports">
          <Li>Sports</Li>
        </Link>
        <Link className="text-decoration-none text-dark" to="/health">
          <Li>Health</Li>
        </Link>
        <Link className="text-decoration-none text-dark" to="/science">
          <Li>Science</Li>
        </Link>
        <Link className="text-decoration-none text-dark" to="/tech">
          <Li>Technology</Li>
        </Link>
        <Link className="text-decoration-none text-dark" to="/entertainment">
          <Li>Entertainment</Li>
        </Link>
      </ul>
    </nav>
  );
}

export default Navbar;
