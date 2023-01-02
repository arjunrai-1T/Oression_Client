import React                        from "react";
import { useSelector, useDispatch } from 'react-redux';

import Search                      from "../Components/Search";
import Menubar                     from "../Components/Menubar";
//import { getSearchResultReducer, } from '../Redux/reducer';
//import { checkReducer }            from '../Redux/reducer';
//import { setSearchStr }            from '../Redux/reducer';
import "../../css/Home.css";

//++import AppsIcon from "@material-ui/icons/Apps";
//++import { Avatar } from "@material-ui/core";
//++import logo from "../Screenshot 2021-09-29 at 8.54.31 PM.png";
//store.dispatch({type : "ADD_TODO", text : "Buy milk"});

function Home(props) 
{
  //++const resultData = useSelector((state) => state.)
  const dispatch = useDispatch()
  return (
    <div className="home">

      <div className="home__header">
        <div className="home__headerLeft">
          {/*<Link to="/about">About</Link>
          <Link to="/store">Store</Link>*/}
        </div>
        {/*<Menubar />*/}
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
          <Search hideButtons={true} />
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
}//++function Home() end

export default Home;
