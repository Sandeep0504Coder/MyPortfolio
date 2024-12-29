import { useState } from "react";
import { Link } from "react-router-dom"
import { HashLink } from "react-router-hash-link"
import styled from "styled-components";
import { FaBars } from "react-icons/fa";

const StyledHeader = styled.header`
  background-color: #74c0fc;
  width: 100%;
  padding: 10px 12px 8px 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .nav_logo {
    padding: 0 12px;
    .nav-logo-link {
      text-decoration: none;
      font-size: 24px;
      color: white;
      font-weight: bold;
    }
  }
  .menuToggleBtn {
    display: none;
    color: white;
    font-size: 24px;
    position: absolute;
    right: 20px;
    top: 15px;
    cursor: pointer;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    .menuToggleBtn {
      display: block;
    }
  }
`;
const NavManu = styled.ul`
  list-style: none;
  display: flex;

  li {
    &:hover {
      cursor: pointer;
      background:rgb(68, 244, 177);
      border-radius: 4px;
    }
  }
  .nav-menu-list {
    text-decoration: none;
    color: white;
    display: block;
    padding: 10px 10px;
  }
  @media screen and (max-width: 768px) {
    display: ${(props) => (props.isToggleOpen ? "flex" : "none")};
    flex-direction: column;
    align-items: center !important;
    width: 100%;
    margin-top: 5px;
  }
`;
const Header = ( ) => {
    const [isToggleOpen, setIsToggleOpen] = useState(false);

    const handleToggleOpen = () => {
      setIsToggleOpen(!isToggleOpen);
    };
    return (
        <StyledHeader>
            <div className="nav_logo">
                <Link className="nav-logo-link" to ="/" >SANDEEP.</Link>
            </div>
            <NavManu isToggleOpen={isToggleOpen}>
                <HashLink className="nav-menu-list" to ="#timeLine">TimeLine</HashLink>
                <HashLink className="nav-menu-list" to ="#about">About</HashLink>
                <HashLink className="nav-menu-list" to ="#skills">Skills</HashLink>
                <HashLink className="nav-menu-list" to ="#projects">Projects</HashLink>
                <HashLink className="nav-menu-list" to ="#contact">Contact</HashLink>
            </NavManu>
            <FaBars className="menuToggleBtn" onClick={handleToggleOpen} />
        </StyledHeader>
    )
}

export default Header