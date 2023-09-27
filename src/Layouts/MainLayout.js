import React from "react";
import { Navbar } from "../components";

export function MainLayout({ children }) {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
}
