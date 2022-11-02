import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Articel from "./Components/Articel";
import Banner from "./Components/Banner/Banner";

import Layout from "./Components/Layout";

function App() {
  return (
    <Layout>
      <Banner />
      <Articel />
    </Layout>
  );
}

export default App;
