
import Home from "./components/Home.js"
import Restaurant from "./components/Restaurant.js"
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";



function App() {
  return (
    <div id = "app">
      {/* using react router to render the correct components based on path */}
      <BrowserRouter>
    <Switch>
      <Route path = "/" component = {Home} exact />
      <Route path = "/restaurants/pingala" component = {Restaurant} />
      <Route path = "/restaurants/revol-kitch" component = {Restaurant} />
      <Route path = "/restaurants/knead" component = {Restaurant} />
      <Route path = "/restaurants/tiny-thai" component = {Restaurant} />
      <Route path = "/restaurants/stone-soup" component = {Restaurant} />
      <Route path = "/restaurants/pho-hong" component = {Restaurant} />
      <Route path = "/restaurants/sing-peb" component = {Restaurant} />
      <Route path = "/restaurants/honey-road" component = {Restaurant} />
      
    </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
