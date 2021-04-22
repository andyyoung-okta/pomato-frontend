import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/index";
import Toast from "./components/Toast";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AppBody from "./views/AppBody";
import SettingsBody from "./views/SettingsBody";

const App = () => {
  return (
    <Provider store={store}>
      <Toast />
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <AppBody />
        </Route>
        <Route path="/settings">
          <SettingsBody />
        </Route>
      </Switch>
      <Footer />
    </Provider>
  );
};

export default App;
