import "./landing.css";
import React from "react";
import { Button, Container } from "react-bootstrap";
import { Link as LinkScroll } from "react-scroll";

const Landing = () => {
  return (
    <div className="landing-page">
      <Container
        style={{ transform: "none" }}
        className="bg-transparent border-0 shadow-none p-0 text-center"
      >
        <h1 className="h1">
          Welcome <span>to</span> our website
        </h1>
        <p className="p1">
          Create your reservation{" "}
          <span
            style={{
              fontWeight: "600",
            }}
          >
            HERE
          </span>{" "}
          !
        </p>
        <LinkScroll
          variant="secondary"
          activeClass="active"
          to="reservation"
          spy={true}
          smooth={true}
          offset={-70}
          duration={1000}
          style={{
            background: "linear-gradient(135deg, #F2994A 5%, #AED581 95%)",
            color: "#fff",
            cursor: "pointer",
            fontSize: "1.2rem",
            padding: "0.5rem 1.5rem",
            borderRadius: "1rem",
            boxShadow: "1rem 1rem 1rem rgba(0, 0, 0, 0.2)",
            transition: "all 0.3s ease-in-out",
            transform: "scale(1)",
            textTransform: "uppercase",
            letterSpacing: "0.1rem",
            fontWeight: "bold",
            outline: "none",
          }}
          onMouseEnter={(e) => {
            e.target.style.background =
              "linear-gradient(135deg, #F2994A 10%, #AED581 100%)";
            e.target.style.backgroundSize = "200% auto";
            e.target.style.backgroundPosition = "right center";
            e.target.style.color = "#212529";
            e.target.style.boxShadow = "0 0.5rem 1rem rgba(0, 0, 0, 0.4)";
            e.target.style.transform = "scale(1.05)";
            e.target.style.transition = "all 0.5s ease-out";
          }}
          onMouseLeave={(e) => {
            e.target.style.background =
              "linear-gradient(135deg, #F2994A 10%, #AED581 90%)";
            e.target.style.color = "#fff";
            e.target.style.boxShadow = "0 0.5rem 1rem rgba(0, 0, 0, 0.2)";
            e.target.style.transform = "scale(1)";
            e.target.style.transition = "all 0.5s ease-out";
          }}
        >
          Make your reservation now!
        </LinkScroll>
      </Container>
    </div>
  );
};

export default Landing;
