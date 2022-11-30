import React from 'react';
import '../Styles/index.scss';
import {BrowserRouter as Router} from "react-router-dom";
import Header from "./Header";
import AppRouter from "../Routes";
import Footer from "./Footer";

const App = () => {
  return (
      <Router>
          <Header/>
          <AppRouter/>
          <Footer/>
      </Router>
  );
};

export default App;
