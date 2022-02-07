import "./App.css";
import Home from "./components/Home";
import Coffee from "./components/Coffees";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "@fontsource/roboto/400.css";
import { ThemeProvider } from "@mui/material";
import theme from "./components/theme";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
          <Header />
          <Switch>
                <Route exact path="/" component={ Home } />
                <Route path="/coffees" component={ Coffee } />
          </Switch>
          <Footer />
      </ThemeProvider>
    </Router>
  );
}

export default App;
