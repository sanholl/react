import "./App.css";

import Root from "./components/Root";
import About from "./components/About";
import Route from "./components/Route";
import Router from "./components/Router";

function App() {
  return (
    <Router>
      <Route path="/" component={<Root />} />
      <Route path="/about" component={<About />} />
    </Router>
  );
}

export default App;
