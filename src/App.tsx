import { Routes, Route } from "react-router-dom";
import { AboutMe, Contact, Home, Project } from "pages";
import { Layout } from "components";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:id" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/aboutme" element={<AboutMe />} />
      </Routes>
    </Layout>
  );
};

export default App;
