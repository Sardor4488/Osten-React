import Home from "./containers/home/home";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Abaut from "./pages/abaut";
import Servises from "./pages/servises/servises";
import Header from "./containers/header";
import Footer from "./containers/footer/footer";
import Product from "./pages/production/product";

const data = [
  { path: "/", component: <Home />, exact: true },
  { path: "/abaut", component: <Abaut /> },
  { path: "/servises", component: <Servises /> },
  { path: "/production", component: <Product /> },
  { path: "/servises", component: <Servises /> },
];

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        {data.map((value) => (
          <Route path={value.path} key={value.exact} exact={true}>
            {value.component}
          </Route>
        ))}
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
