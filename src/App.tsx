import React from "react";
import { HomePageTemplate } from "./components/template/home";
import { ProcedureProvider } from "./context/procedure";

const HomePage = () => {
  return (
    <ProcedureProvider>
      <HomePageTemplate />
    </ProcedureProvider>
  );
};

export default HomePage;
