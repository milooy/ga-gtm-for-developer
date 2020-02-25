/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";

const danger = css`
  color: red;
`;

function App() {
  return (
    <div className="App">
      <Navigation />
      <Router>
        <Switch>
          <Route path="/book:id" component={Home} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
