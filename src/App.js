import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {ROUTES} from "./constants";
import Products from "./components/products";
import FourOhFour from "./components/404";
import Footer from "./components/footer"

function App() {
  return (
    <Router>
      <div>Header</div>
      <div>
        <Switch>
          <Route exact path={ROUTES.PRODUCTS} component={Products} />
          <Route component={FourOhFour} />
        </Switch>
      </div>
      <Footer/>
    </Router>
  );
}

export default App;
