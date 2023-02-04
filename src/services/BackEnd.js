import React                  from 'react';
import axios                  from 'axios';
import {FETCH_SEARCH_RESULT}  from "../redux/actions/Actions";

export const getOressionSearchResults= async (dispatch, getState)=> {
  const state = getState();
  console.log("[callSearchApi()] oression State: "+state.oression);
  var searchURL  = "https://www.gigablast.com/search?q="+state.oression.search_query+"&userid=511&code=2015200272&format=json";
  var encodedURL = encodeURI(searchURL);
  console.log("[callSearchApi()] Search String: "+encodedURL);
  await axios.get(searchURL)
  .then(function (response) {
    console.log("[callSearchApi()] Query Response: ",response);
    dispatch(FETCH_SEARCH_RESULT.set({type: "SUCCESS_SEARCH_RESULT",payload: response }));
  })
  .catch(function (error) {
    console.log("[callSearchApi()] Query Response Found Error",error);
    dispatch(FETCH_SEARCH_RESULT.set({type: "ERROR_SEARCH_RESULT",payload: error }));
  })
};

/*
class BackEnd  
{  
    constructor(props)
    {
      super(props);
      this.state = {name: "hello"}//++this end
      console.log("BackEnd Constructor");
    }//++constructor() end

    async getData(searchstr) {
      console.log("[getData()] Search String: "+searchstr);
      //++create a new XMLHttpRequest
      var xhr = new XMLHttpRequest()

      //++Fired when an XMLHttpRequest transaction completes successfully.
      xhr.addEventListener('load', () => {
        //++update the state of the component with the result here
        console.log(xhr.responseText)
      });
      xhr.addEventListener('error', () => {
        console.log("[getData()] error")
      });
      xhr.addEventListener('timeout', () => {
        console.log("[getData()] timeout")
      });
      xhr.addEventListener('progress', () => {
        console.log("[getData()] progress")
      });
      xhr.addEventListener('loadstart', () => {
        console.log("[getData()] Load Start")
      });
      xhr.addEventListener('loadend', () => {
        console.log("[getData()] Load End")
      });
      //++open the request with the verb and the url
      var searchURL  = "https://www.gigablast.com/search?q="+searchstr+"&userid=511&code=2015200272&format=json";
      var encodedURL = encodeURI(searchURL);
      console.log("[callSearchApi()] Search String: "+encodedURL);
      xhr.open('GET', encodedURL)
      //++send the request
      xhr.send()
    }//++async getData(searchstr) end
  
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
                  dispatch( getSearchResultReducer(result) );
                  return result;
              },//++(result)
              (error)  => {
                  console.log("[callSearchApi()] Error: " + error);
                  return -1;
              }//++(error)
            );//++then end
    }//++callSearchApi() end

}//++class BackEnd extends React.Component end
*/
