import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import { Link as LinkScroll } from "react-scroll";

import "./navigation.css";

const Navigation = () => {
  return (
    <Fragment>
      <Navbar
        variant="light"
        expand="lg"
        className="g-0 f-0 fixed-top navbar-section"
      >
        <Navbar.Brand
          href="/"
          className="mx-auto nav-title"
        >
          Steak House Shamrock
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="g-0 hide" />
        <Navbar.Collapse id="basic-navbar-nav" className="hide" />
        <Nav className="ml-auto hide">
          <LinkScroll
            className="nav-link"
            activeClass="active"
            to="reservation"
            spy={true}
            smooth={true}
            offset={-70}
            duration={1000}
          >
            Reserve Now
          </LinkScroll>
          <LinkScroll
            className="nav-link"
            activeClass="active"
            to="menu"
            spy={true}
            smooth={true}
            offset={-70}
            duration={1000}
          >
            Menu
          </LinkScroll>
          <LinkScroll
            className="nav-link"
            activeClass="active"
            to="findus"
            spy={true}
            smooth={true}
            offset={-70}
            duration={1000}
          >
            Find us
          </LinkScroll>
        </Nav>
      </Navbar>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
