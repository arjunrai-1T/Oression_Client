import   React, { useState }                from "react";
import { Button }                           from "@material-ui/core";
import                                      "@fortawesome/fontawesome-free/css/all.min.css";
import                                      "../../assets/css/Search.css";

/*
class Search extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      input          : '',
      queryString    : '',
      setInput       : '',
      hideButtons    : false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleChange(event) {
    this.setState({queryString: event.target.value});
  }

  handleSearch(event) {
    console.log("[Search)] Search String: "+this.state.queryString);
    this.props.history.push({ 
      pathname:'/search',
      search: '?query='+this.state.queryString,
      queryString: this.state.queryString,
    });
  }

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

          <MicIcon/>
        </div>
        <button type="button" onClick={() => this.handleSearch()}>Search</button>
         { true === this.props.hideButtons ? (
          <div className="search__buttons">
            <Button type="button" onClick={this.handleSearch} variant="outlined"> Search</Button>
          </div>
        ) : (
          <div className="search__buttons">
            <Button className="search__buttonsHidden"  type="button" onClick={this.handleSearch} variant="outlined">Search Me</Button>
          </div>
        )} 
      </form>
    );
  }
}
*/

const Search=(props)=>{

    const [queryString,setQueryString] = React.useState("")
    
    const handleChange=(event) =>{
      setQueryString(event.target.value);
      props.handleQueryInput(event.target.value);
    }

    const handleCrossSearch=(event) =>{
      setQueryString("");
      props.handleQueryInput("");
    }

    const handleSearch=(event)=> {
      console.log("[Search)] Search String: "+queryString);
      props.handleCallSearch(queryString);
    }

    const onSubmitForm=(props)=>{
        console.log("onSubmitForm");
        return false;
    }
  
    React.useEffect(()=>{},[]);
  
    return (
      <div className="search">
          <div className="search__input">
                <input value={queryString}      onChange={handleChange} />
                <input className="search_enter" type="text" onClick={handleSearch} />
                <div className="search_button_container">
                  <Button type="button" className="cross__buttons" variant="outlined"  onClick={handleCrossSearch}>
                      <i className="fas fa-times"></i>
                  </Button>
                  <Button type="button" className="search__buttons" variant="outlined" onClick={handleSearch}>
                    <i className="fas fa-search"></i>
                  </Button>
                </div>
                {/*<MicIcon/>*/}
          </div>
          {/*<button type="button" onClick={() => handleSearch()}>Search</button>*/}
          { true === props.hideButtons ? (
            <div className="search__buttons">
              <Button type="button" onClick={handleSearch} variant="outlined"> Search</Button>
            </div>
          ) : (
            <div className="search__buttons">
              <Button className="search__buttonsHidden"  type="button" onClick={handleSearch} variant="outlined">Search Me</Button>
            </div>
          )}
      </div>
    );

}
export default Search;

