import React from "react";
import { connect } from "react-redux";
import { searchitem } from "../reducers/actions";
import { withRouter } from "react-router";

class Search extends React.Component {

   state={
     value:"",
     
   }

   handlechange= (e) => {
     this.setState({
       value:e.target.value,
       isloggedin:false,
       
     })
   }

   handlesubmit = (value) => {
    // console.log(e);
    // e.preventdefault();
   // const { value } = this.state;
    this.props.search(value);
    console.log(this.state.value);
    console.log({value});       
     this.setState({
       isloggedin:true,
       value:'',
     })
     this.props.history.push(`/search/${value}`);
   }
     
   
  render() {
    return (
      <div>
        <input style={{width:"400px"}} onChange={this.handlechange} type="text"
        placeholder="search for household appliances" value={this.state.value}>
        </input>
        
        <button onClick={()=>this.handlesubmit(this.state.value)}>Submit</button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return{
      search: values => {
        dispatch(searchitem(values));
      }
  }
}

export default connect(null,mapDispatchToProps) (withRouter(Search));
