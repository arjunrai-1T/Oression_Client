import React          from "react";
import { Link }       from "react-router-dom";
import { withRouter } from 'react-router';

import Search     from "../Components/Search";
import ImagesPage from "../Components//ImagesPage";
import LoadingAni from '../Components/LoadingAni';
import Menubar    from "../Components/Menubar";
import Tabs       from "../Components/Tab";
import "../../css/SearchResult.css";
//import SearchResult from "./search_result";

class SearchResult extends React.Component 
{

        constructor(props) {
          super(props)
          this.state = {
            resultmilisecond: '',
            resultdata: [],
            numbers : [1, 2, 3, 4, 5],
            teststr : 'Hello'
          }
          this.componentDidMount = this.componentDidMount.bind(this);
        }//++constructor(props) end

        async callSearchApi(searchstr){
          console.log("[callSearchApi()] Search String: "+searchstr);
          //++console.log("callSearchApi method");
          var searchURL  = "https://www.gigablast.com/search?q="+searchstr+"&userid=511&code=2015200272&format=json";
          var encodedURL = encodeURI(searchURL);
          console.log("[callSearchApi()] Search String: "+encodedURL);
          await fetch(searchURL)
            .then(res => res.json())
            .then(

              (result) => {
                console.log( result );
                this.setState({ data: result });
                console.log("[SearchPage()] Result: "+ this.state.data["results"][0]["htmlSum"] );
              },//++(result)

              (error)  => {
                console.log("[callSearchApi()] Error: " + error);
              }//++(error)

            );//++then end
        }//++callSearchApi() end

        sleep(milliseconds) {
          const date = Date.now();
          let currentDate = null;
          do {
            currentDate = Date.now();
          } while (currentDate - date < milliseconds);
        }

        async componentDidMount() {
            
            var searchstr = this.props.location.state;
            console.log("[componentDidMount()] Query String: "+ this.props.location.state );
            console.log("[componentDidMount()] Search String: "+searchstr);
            var searchURL  = "https://www.gigablast.com/search?q="+searchstr+"&userid=511&code=2015200272&format=json";
            var encodedURL = encodeURI(searchURL);
            console.log("[componentDidMount()] Search String: "+encodedURL);
            await fetch(encodedURL)
              .then(res => res.json())
              .then(
        
                (result) => {
                  console.log( result );
                  this.setState({ resultdata: result["results"] });
                  this.setState({ resultmilisecond: result["responseTimeMS"] });
                  //this.setState((prevState, props) => {
                  //  return { data: this.state.data["results"] };
                  //});
                  console.log("[componentDidMount()] data length : "+ this.state.resultdata.length );
                  this.state.resultdata.map(el => ( console.log("[componentDidMount()] "+ el ) ) );


                },//++(result)
        
                (error)  => {
                  console.log("[componentDidMount()] Error: " + error);
                }//++(error)
        
              );//++then end

              /*
              await fetch('https://jsonplaceholder.typicode.com/todos/1')
                .then(response => response.json())
                .then( 

                  (result) => {
                    console.log( result );
                    console.log( result["title"] );
                    //setTimeout(function(){ }, 8000);
                    this.sleep(10000);
                    this.setState({ teststr: result["title"] });
                  },//++(result)
          
                  (error)  => {
                    console.log("[componentDidMount()] Error: " + error);
                  }//++(error)

                );*/

        }//++componentDidMount() end

        componentWillUnmount() {
        }

        render(){

            /*return (
              <div>
                <ul>

                  { <p>{ this.state.teststr}</p> }
                  {  this.state.numbers.map(el => ( <li>{el}</li>) ) }
                  {  this.state.resultdata.map( (element,index) => ( <li>{this.state.resultdata[index]["htmlSum"]}</li>) ) }

                </ul>
              </div>
            );*/

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
                          About {this.state.resultdata.length} results (
                          {this.state.resultmilisecond / 1000} seconds)
                        </p>

                        <div className="search_result_parent">
                          <div className="search_result_list">
                            {this.state.resultdata.map((element, index) => (
                              <SearchResult
                                htmlURL={this.state.resultdata[index]["url"]}
                                htmlTitle={this.state.resultdata[index]["title"]}
                                htmlsummary={this.state.resultdata[index]["htmlSum"]}
                              />
                            ))}
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

        
        }//++render() end

}//++class SearchPage extends React.Component end
export default withRouter(SearchResult);

//++https://codesource.io/how-to-use-this-props-history-push-on-your-react-project/
//++https://www.valentinog.com/blog/await-react/
//https://www.sitepoint.com/delay-sleep-pause-wait/
//http://www.hackingwithreact.com/read/1/13/rendering-an-array-of-data-with-map-and-jsx