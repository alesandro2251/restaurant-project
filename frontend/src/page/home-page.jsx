import React from "react";
import Landing from "../components/landing/landing";
import Menu from "../components/menu/menu";
import FindUs from "../components/find us/find-us";
import Reservation from "../components/reservations/reservations";
import Footer from "../components/footer/footer";

function HomePage() {
  return (
    <div>
      <Landing />
      <Menu />
      <FindUs/>
      <Reservation/>
      <Footer/>
    </div>
  );
}

export default HomePage;
