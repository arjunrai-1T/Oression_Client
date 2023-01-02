import   React, { useState } from "react";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { withRouter } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { getSearchResultReducer, checkReducer,setSearchStr } from '../../Redux/Reducer.js';
import  "@fortawesome/fontawesome-free/css/all.min.css";
import  "../../css/Search.css";

/*
function Search({ hideButtons = false }) {
  //const [{}, dispatch] = useStateValue();

  const [input, setInput] = useState("");
  const history = useHistory();

  const search = (e) => {
    e.preventDefault();
    //++console.log("You hit search", input);
    console.log(e.target.value);
    // dispatch({
    //   type: actionTypes.SET_SEARCH_TERM,
    //   term: input,
    // });
    //++history.push("/search");
  };

  return (
    <form className="search">
      <div className="search__input">
        <SearchIcon className="search__inputIcon" />
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <MicIcon />
      </div>

      {!hideButtons ? (
        <div className="search__buttons">
          <Button type="submit" onClick={search} variant="outlined">
            Search
          </Button>
          <Button variant="outlined">I'm Feeling Lucky</Button>
        </div>
      ) : (
        <div className="search__buttons">
          <Button
            className="search__buttonsHidden"
            type="submit"
            onClick={search}
            variant="outlined"
          >
          Search
          </Button>
          <Button className="search__buttonsHidden" variant="outlined">
            I'm Feeling Lucky
          </Button>
        </div>
      )}
    </form>
  );
}
*/

const SearchButton = (props) => {
  const history = useHistory();
  const handleClick = () => {
    history.push('/search');
  } 
  return (
    <button type="button" onClick={handleClick}>Search</button>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    // dispatching plain actions
    getSearchResultReducer: () => dispatch(getSearchResultReducer("marvel")),
    checkReducer: () => dispatch(checkReducer("marvel")),
  }
}

class Search extends React.Component 
{

  constructor(props) {
    super(props);
    this.state = {
      redirect : '',
      search   : '',
      input    : '',
      value    : '',
      setInput : '',
      hideButtons : false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }//++constructor(props)  end

  handleChange(event) {
    this.setState({value: event.target.value});
    //++console.log(this.state.value);
  }//++handleChange(event) end

  handleSearch(event) {
    console.log("[Search)] Search String: "+this.state.value);
    //return <Redirect push to="/search" />
    //this.setState({ redirect: "/search" });
    //++this.props.history.push({pathname:'/search'});
    this.props.history.push({ 
      pathname:'/search',
      search: '?query='+this.state.value,
      //state: { hideButtons: true,searchstr: this.state.value, result: "hello" }
      state: this.state.value
    });
  }//++handleSearch(event) end

  componentWillUnmount() {
  }//++componentWillUnmount() end

  render() {
   
    if( true === this.props.hideButtons )
    {
      //console.log("[Search()] hide button true");
    }
    else
    {
      //console.log("[Search()] hide button false");
    }

    return (
      <form className="search">
        <div className="search__input">
          <input value={this.input} onChange={this.handleChange} />
          <input
            className="search_enter"
            onClick={this.handleSearch}
            type="submit"
          />
          <div className="search_button_container">
            <Button
              type="button"
              className="cross__buttons"
              variant="outlined"
            >
              <i className="fas fa-times"></i>
            </Button>
            <Button
              type="button"
              className="search__buttons"
              onClick={this.handleSearch}
              variant="outlined"
            >
              <i className="fas fa-search"></i>
            </Button>
          </div>

          {/*<MicIcon/>*/}
        </div>
        {/*<button type="button" onClick={() => this.handleSearch()}>Search</button>*/}
        {/* { true === this.props.hideButtons ? (
          <div className="search__buttons">
            <Button type="button" onClick={this.handleSearch} variant="outlined"> Search</Button>
          </div>
        ) : (
          <div className="search__buttons">
            <Button className="search__buttonsHidden"  type="button" onClick={this.handleSearch} variant="outlined">Search Me</Button>
          </div>
        )} */}
      </form>
    );
  }//++render() end

}//++class Search extends React.Component end


export default withRouter(Search);

//https://rookiecoder.medium.com/react-button-click-navigate-to-new-page-6af7397ea220

//https://ultimatecourses.com/blog/programmatically-navigate-react-router
//https://stackoverflow.com/questions/39184049/react-router-cannot-read-property-push-of-undefined