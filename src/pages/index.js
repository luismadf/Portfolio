import styled from "@emotion/styled";
import { Layout, Hero, ProjectList } from "../components";
import { Routes, Route, Link } from "react-router-dom";
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
