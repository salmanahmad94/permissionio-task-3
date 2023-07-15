import React from "react";
import Layout from "./components/Layout/index.js";

import LeftWrapper from "./components/LeftWrapper";
import RightWrapper from "./components/RightWrapper";
import Form from "./components/Form";
import TextBox from "./components/TextBox";

import Mona from "./assets/mona.png";

import "./App.css";

function App() {
  return (
    <Layout>
      <LeftWrapper>
        <Form />
        <TextBox />
      </LeftWrapper>
      <RightWrapper>
        <img src={Mona} alt="mona lisa" />
      </RightWrapper>
    </Layout>
  );
}

export default App;
