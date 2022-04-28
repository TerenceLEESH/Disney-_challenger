import React from "react";
import styled from "styled-components";
import logo from "../images/logo.svg";
import homeIcon from "../images/home-icon.svg";
import searchIcon from "../images/search-icon.svg";
import watchListIcon from "../images/watchlist-icon.svg";
import originalIcon from "../images/original-icon.svg";
import movieIcon from "../images/movie-icon.svg";
import seriesIcon from "../images/series-icon.svg";

const Header = () => {
  return (
    <Nav>
      <Logo src={logo} />
      <NavMenu>
        <a>
          <img src={homeIcon} />
          <span>HOME</span>
        </a>
        <a>
          <img src={searchIcon} />
          <span>SEARCH</span>
        </a>
        <a>
          <img src={watchListIcon} />
          <span>WATCHLIST</span>
        </a>
        <a>
          <img src={originalIcon} />
          <span>ORIGINALS</span>
        </a>
        <a>
          <img src={movieIcon} />
          <span>MOVIES</span>
        </a>
        <a>
          <img src={seriesIcon} />
          <span>SERIES</span>
        </a>
      </NavMenu>
      <UserImg src="https://icons-for-free.com/iconfiles/png/512/person+24px-131987943307765790.png" />
    </Nav>
  );
};

export default Header;

const Nav = styled.div`
  height: 70px;
  background: #090b13;
  display: flex;
  align-items: center;
  padding: 0 36px;
  overflow-x: hidden;
`;

const Logo = styled.img`
  width: 80px;
`;

const NavMenu = styled.div`
  display: flex;
  flex: 1;
  margin-left: 25px;
  align-items: center;
  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    cursor: pointer;
    img {
      height: 20px;
    }

    span {
      font-size: 13px;
      letter-spacing: 1.42px;
      position: relative;
      &:after {
        content: "";
        height: 2px;
        background: white;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -6px;
        opacity: 0;
        transform-origin: left center;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        transform: scaleX(0);
      }
    }

    &:hover {
      span:after {
        transform: scaleX(1);
        opacity: 1;
      }
    }
  }
`;

const UserImg = styled.img`
  background-color: #fff;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
`;
