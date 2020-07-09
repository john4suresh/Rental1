import React from "react";
import Carosel from "./carosel";
import "../../bootstrap-4.5.0-dist/css/bootstrap.min.css";
import Homecards from "./homecards";
import "./home.css";
import Footer from "../navigation/footer";

class Home extends React.Component {
  render() {
    return (
    <div className="entire-body">
      <div className="my-3">
        <div className="my-3">
          <Carosel />
        </div>
        <div className="my-3">
          <Homecards />
        </div>
        <div className="my-7">
          <Footer/>
        </div>
       
      </div>
      </div>
    );
  }
}

export default Home;
