import styled from "@emotion/styled";
import { Layout, Hero, ProjectList } from "../components";
import "./index.css";

const ProjectTitle = styled.h3`
  font-size: 40px;
  margin-bottom: 50px;
  font-weight: 400;

  span {
    font-weight: 700;
  }

  @media (max-width: 1000px) {
    text-align: left;
    font-size: 35px;
    margin-bottom: 20px;
  }
`;

function App() {
  return (
    <div className="App">
      <div className="blue-bar"></div>
      <Layout>
        <Hero />
        <main>
          <div class="container" id="projects">
            <ProjectTitle>
              These are my <span>projects.</span>
            </ProjectTitle>
            <ProjectList />
          </div>
        </main>
      </Layout>
    </div>
  );
}

export default App;
