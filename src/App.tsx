import { Routes, Route } from "react-router-dom";
import { AboutMe, CV, Home, Project } from "pages";
import { Layout } from "components";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:id" element={<Project />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/curriculum" element={<CV />} />
      </Routes>
    </Layout>
  );
};

export default App;
