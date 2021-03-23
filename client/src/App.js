import Header from "./component/Header";
import SavedPage from "./pages/SavedPage";
import SearchPage from "./pages/SearchPage";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { StoreProvider } from "./utils/GlobalState";
import "./App.css";

function App() {
  return (
    <Router>
      <StoreProvider>
        <Header />
        <div className="App">
          <Switch>
            <Route path="/saved">
              <SavedPage />
            </Route>
            <Route path="/">
              <SearchPage />
            </Route>
          </Switch>
        </div>
      </StoreProvider>
    </Router>
  );
}

export default App;
