import React ,{useState,useEffect} from "react";
import { Link,useLocation }        from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import {FETCH_SEARCH_RESULT}       from "../../Redux/Actions";
import {getOressionSearchResults}  from "../../Redux/BackEnd";

import Search                      from "../Home/Search";
import ImagesPage                  from "../Components//ImagesPage";
import LoadingAni                  from '../Components/LoadingAni';
import Menubar                     from "../Components/Menubar";
import Tabs                        from "../Components/Tab";
import                             "../../css/SearchResult.css";

const SearchResult =(props)=>{

    let resultdata        = useState([]);
    let resultmilisecond  = useState("");
    let location          = useLocation();
    let dispatch          = useDispatch();
    let state             = useSelector(state=>state.oression);
    console.log("[SearchResult] redux State: ",state);
    //++console.log("[SearchResult] Search Result:",JSON.stringify(state.search_result));

    state?.search_result?.data?.results?.forEach(element => {
        //++console.log(element);
    });

    const sleep=(milliseconds)=>{
          const date = Date.now();
          let currentDate = null;
          do {
            currentDate = Date.now();
          } while (currentDate - date < milliseconds);
    }

    React.useEffect(()=>{
      console.log("[SearchResult][React.useEffect] location Object: ",location);
      console.log("[SearchResult][React.useEffect] redux State: ",state);
    },[]);

    return (
        <div className="searchPage">
                <div className="home__header">
                  <div className="searchPage__header">
                    <Link to="/" className="searchPage__logo">
                      <p className="search_page_logo_font">Oression</p>
                    </Link>

                    <div className="searchPage__headerbody">
                      <Search hideButtons={false} />
                    </div>
                  </div>
                  <Menubar />
                </div>

                <div className="searchPage__options">
                  <div className="searchPage__optionsLeft">
                    <Tabs>
                      <a label="All" to="/all">
                        <p className="searchPage__resultCount">
                          About {state?.search_result?.data?.results?.length} results (
                          {/*resultmilisecond / 1000*/} seconds)
                        </p>

                        <div className="search_result_parent">
                          <div className="search_result_list">
                
                            { state?.status==200 && 
                              state?.search_result?.data?.results?.map((element, index) =>{
                                  //return <p>{JSON.stringify(element) }</p>
                                  
                              })
                            }

                          </div>
                          <div className="search_result_more"></div>
                        </div>
                      </a>

                      <a label="News">
                        <div className="news_content">
                          <span className="content_info">Coming Soon</span>
                          <LoadingAni />
                        </div>
                      </a>

                      {/* <a label="Images">
                        <div className="images_container">
                          <ImagesPage />
                        </div>
                      </a>

                      <a label="Videos">
                        Nothing to see here, this tab is <em>extinct</em>!
                      </a>

                      <a label="maps">
                        <LoadingAni />
                      </a> */}
                    </Tabs>
                  </div>
                </div>
        </div>
    );
}
export default SearchResult;