
import React                                      from "react";
import { BrowserRouter, Routes, Route }           from "react-router-dom";
import SearchResultPage                           from "../Result/SearchResult";
import Home                                       from "../Home/Home";
import                                            "../../css/App.css";

import {getOressionSearchResults}                 from "../../Redux/BackEnd";
import { useSelector, useDispatch }               from 'react-redux';

function App(props) {
  
  let dispatch=useDispatch();

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          
          <Route path="/search" element={<SearchResultPage/>} loader={async ({request,params }) => {
                console.log("[App] SearchResultPage Page data loaded before rendering");
          }} />

          <Route path="/" element={<Home/>}  loader={({params}) => {
                console.log("[App] Home Page data loaded before rendering")
          }} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
