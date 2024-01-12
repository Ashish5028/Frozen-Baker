import React from "react";
import { ContactPage } from "./component/contact.jsx";
import { Header } from "../component/Header.jsx";

export const ContactIndex = () => {
  return (
    <div>
      <Header />
      <br />
      <ContactPage />
    </div>
  );
};

export default ContactIndex;
