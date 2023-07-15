import React from "react";
import Layout from "./components/Layout/index.js";

import LeftWrapper from "./components/LeftWrapper";
import RightWrapper from "./components/RightWrapper";
import Form from "./components/Form";
import TextBox from "./components/TextBox";

import "./App.css";

function App() {
  return (
    <Layout>
      <LeftWrapper>
        <Form />
        <TextBox />
      </LeftWrapper>
      <RightWrapper />
    </Layout>
  );
}

export default App;
