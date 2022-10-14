import React, {Suspense} from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import {HomePage} from "./pages/HomePage";
import {AuthPage} from "./pages/AuthPage";
import './style.scss'
import {Auth} from "./types/authTypes";

const App = () => {
  return (
      <BrowserRouter>
          <Navbar />
          <Suspense fallback={<div>loading...</div>}>
              <Routes>
                  <Route path={'/'} element={<HomePage />} />
                  <Route path={'/registration'} element={<AuthPage type={Auth.REGISTRATION}/>} />
                  <Route path={'/login'} element={<AuthPage type={Auth.LOGIN}/>} />
              </Routes>
          </Suspense>
      </BrowserRouter>
  );
};

export default App;
