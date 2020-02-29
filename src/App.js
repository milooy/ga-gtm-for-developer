/** @jsx jsx */
import { jsx } from "@emotion/core";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import BookDetail from "./pages/BookDetail";
import Category from "./pages/Category";
import Payment1 from "./pages/Payment1";
import Payment2 from "./pages/Payment2";
import Payment3 from "./pages/Payment3";


function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route path="/payment/step1" component={Payment1} />
          <Route path="/payment/step2" component={Payment2} />
          <Route path="/payment/step3" component={Payment3} />
          <Route path="/category/:categoryName" component={Category} />
          <Route path="/book/:bookId" component={BookDetail} />
          <Route path="/" exact component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
