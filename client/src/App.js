import Header from "./component/Header";
import SavedPage from "./pages/SavedPage";
import SearchPage from "./pages/SearchPage";
import { HashRouter, Switch, Route } from "react-router-dom";
import { StoreProvider } from "./utils/GlobalState";
import "./App.css";

function App() {
  return (
    <HashRouter>
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
    </HashRouter>
  );
}

export default App;
