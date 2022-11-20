import { Routes, Route } from "react-router-dom";
import { Layout } from "../components";
import Project from "./project";
import Home from "./home";

import "./index.css";

function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:id" element={<Project />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
