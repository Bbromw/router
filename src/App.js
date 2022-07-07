import { Link, Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import Home from "./components/Home";
import { About } from "./components/About";
import { Other } from "./components/Other";
import { Another } from "./components/Another";
import { Extra } from "./components/Extra";
import { NotFound } from "./components/NotFound";

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link>
        <br />
        <Link to="/about">About</Link>
      </nav>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="*" component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
