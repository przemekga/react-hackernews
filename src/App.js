import React from "react";
import Header from "./components/Header/Header";
import { Route, Switch } from "react-router-dom";

import Stories from "./pages/Stories/Stories";
import StoryCommentPage from "./pages/StoryCommentPage/StoryCommentPage";
import PageNotFound from "./pages/404/404";

import "../node_modules/materialize-css/dist/css/materialize.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Switch>
          <Route path="/" exact component={Stories} />
          <Route path="/story/:id" component={StoryCommentPage} />
          <Route path="/stories/:id" component={Stories} />
          <Route component={PageNotFound} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
