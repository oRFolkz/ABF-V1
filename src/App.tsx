import React from "react";
import { GlobalCss } from "./styles.ts";
import { ContextProvider } from "./components/Context.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/index.tsx";
import BackGroundImgs from "./components/BackGroundImgs/index.tsx";
import Coments from "./components/Comments/index.tsx";
import SkillCards from "./components/SkillCards/index.tsx";
import Location from "./components/Location/index.tsx";
import HoverCircle from "./components/HoverCircle/index.tsx";
import Services from "./components/Services/index.tsx";

import BlogHome from "./components/BlogPages/BlogHome/index.tsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <ContextProvider>
              <GlobalCss />
              <NavBar />
              <BackGroundImgs />
              <Services />
              <Coments />
              <SkillCards />
              <Location />
              <HoverCircle />
            </ContextProvider>
          }
        />
        <Route
          path="/blog"
          element={
            <ContextProvider>
              <GlobalCss />
              <NavBar />
              <BlogHome />
              <Location />
              <HoverCircle />
            </ContextProvider>
          }
        />
      </Routes>
    </Router>
  );
}
export default App;
