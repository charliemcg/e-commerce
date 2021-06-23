import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ROUTES } from "./constants";
import Products from "./components/products";
import FourOhFour from "./components/404";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import UnderConstruction from "./components/underConstruction";
import store from "./store";
import { Provider } from "react-redux";
import Home from "./components/home";
import Cart from "./components/cart";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <div>
          <Switch>
            <Route exact path={ROUTES.HOME} component={Home} />
            <Route exact path={ROUTES.CART} component={Cart} />
            <Route exact path={ROUTES.PRODUCTS} component={Products} />
            <Route
              exact
              path={ROUTES.UNDER_CONSTRUCTION}
              component={UnderConstruction}
            />
            <Route component={FourOhFour} />
          </Switch>
        </div>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
