import React from "react";
import styled from "@emotion/styled";
import { Provider } from "react-redux";
import store from "./store";
import Layout from "./components/Layout/Layout";
import ProjectList from "./components/ProjectList/ProjectList";

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
      <Provider store={store}>
        <Layout>
          <main>
            <div class="container" id="projects">
              <ProjectTitle>
                These are my <span>projects.</span>
              </ProjectTitle>
              <ProjectList />
            </div>
          </main>
        </Layout>
      </Provider>
    </div>
  );
}

export default App;
