import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./screens/Dashboard";
// import { ChakraProvider } from "@chakra-ui/react";
import Wrapper from "./components/Wrapper";
// import FirebaseProvider from "./database";

function App() {
  return (
    <Wrapper>
      {/* <FirebaseProvider> */}
      <Router>
        <div>
          <Switch>
            {/* <Route path="/about">
            <About />
          </Route>
          <Route path="/topics">
            <Topics />
          </Route> */}
            <Route exact path="/">
              <Dashboard />
            </Route>
          </Switch>
        </div>
      </Router>
      {/* </FirebaseProvider> */}
    </Wrapper>
  );
}

export default App;
