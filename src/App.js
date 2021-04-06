import React from "react";
import styled from "@emotion/styled";
import { Provider } from "react-redux";
import store from "./store";
import Layout from "./components/Layout/Layout";
import ProjectList from "./components/Projects/ProjectList";

const ProjectTitle = styled.h2`
  font-size: 50px;
  margin-bottom: 50px;
  font-weight: 400;

  span {
    font-weight: 700;
  }
`;

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Layout>
          <main>
            <div class="container">
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
