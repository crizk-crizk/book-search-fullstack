import "./App.css";
import Header from "./component/Header";
import SavedPage from "./pages/SavedPage";
import SearchPage from "./pages/SearchPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { StoreProvider } from "./utils/GlobalState";

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
