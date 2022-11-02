import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Banner from "./Components/Banner";

import Layout from "./Components/Layout";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Layout>
      <Banner />
    </Layout>
  );
}

export default App;
