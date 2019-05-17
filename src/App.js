import React from "react";
import Header from "./components/Header/Header";
import { Route } from "react-router-dom";

import Stories from "./pages/Stories/Stories";
import StoryCommentPage from "./pages/StoryCommentPage/StoryCommentPage";

import "../node_modules/materialize-css/dist/css/materialize.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Route path="/" exact component={Stories} />
        <Route path="/story/:id" component={StoryCommentPage} />
        <Route path="/stories/:id" component={Stories} />
      </div>
    </div>
  );
}

export default App;
