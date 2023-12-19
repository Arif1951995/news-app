import { Route, Routes } from "react-router-dom";
import "./App.css";
import Cards from "./components/Cards";
import staticData from "./staticData.ts";
import React from "react";
import Article from "./components/Article.tsx";

export const AppContext = React.createContext({});

function App() {
  console.log(staticData);

  return (
    <div className="p-4">
    
      <Routes>
        <Route  path="/articles/:title" element={<Article />} />
        <Route  path="/" element={<Cards />} />
      </Routes>
      {/* <Cards /> */}
    </div>
  );
}

export default App;
