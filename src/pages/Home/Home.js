import React                        from "react";
import { useSelector, useDispatch } from 'react-redux';

import Search                       from "./Search";
import Menubar                      from "../../components/Menubar";
import                              "../../assets/css/Home.css";

import { useLocation,useNavigate,Link  }  from "react-router-dom";
import {FETCH_SEARCH_RESULT}              from "../../redux/actions/Actions";
import {getOressionSearchResults}         from "../../services/BackEnd";

const Home=(props)=> {
  
  const state    = useSelector(state=>state.oression)
  console.log("Home Redux State:",state);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  React.useEffect(()=>{});

  const handleQueryInput=(queryString)=>{
    dispatch(FETCH_SEARCH_RESULT.set({type: "ADD_SEARCH_QUERY",payload:queryString}));
  }

  const handleCallSearch=(queryString)=>{
    console.log("[handleCallSearch] Search String: ",queryString);
    dispatch(FETCH_SEARCH_RESULT.set({type: "TRIGGER_SEARCH_RESULT",payload:""}));
    dispatch(getOressionSearchResults);
    //pushState(state(Object Mandatory), unused(Mandatory))
    //++window.history.pushState({  pathname:'/search', search: '?query='+queryString, queryString: queryString,},"");
    navigate({pathname: "/search",search: '?query='+queryString,queryString: queryString});
  }
  
  return (
     <div className="home">

        <div className="home__header">
          {/*<div className="home__headerLeft">
            <Link to="/about">About</Link>
            <Link to="/store">Store</Link>
          </div>
          <Menubar />*/}
        </div>

        <div className="home__body">
          {/*<img className="" src={logo} alt="" />*/}
          <p className="logo_font">Oression</p>
          <div className="home__inputContainer">
              {/*<button aria-label="Check Reducer" onClick={() => dispatch(setSearchStr("marvel"))}>
                Check Reducer
              </button>
              <button aria-label="Check Reducer" onClick={() => dispatch(getSearchResultReducer("checkReducer"))}>
                GetSearchResultReducer
              </button>*/}
              <Search hideButtons={false} handleQueryInput={handleQueryInput} handleCallSearch={handleCallSearch}/>
          </div>
          <div className="version_details_container">
            <div className="version_details">
              <span className="logo_font_sub">version 0.1 beta </span>
              <a className="link__subtitle" href="https://www.makeinindia.com/">
              We support Make in India initiative 
              </a>
            </div>
          </div>
        </div>

    </div>
  );
}
export default Home;
