import React from "react";
import { About, Banner, Skills, Portfolio, Contact } from "../components";

export function Home() {
  return (
    <div>
      <Banner />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
    </div>
  );
}
