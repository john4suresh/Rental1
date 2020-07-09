import React from "react";
import { Carousel } from "react-bootstrap";

class Carosel extends React.Component {
  state = {
    data: []
  };

  componentDidMount() {
    let array = [
      "https://images.unsplash.com/photo-1556911220-bff31c812dba?ixlib=rb-1.2.1&auto=format&fit=crop&w=835&q=80",
      "https://images.unsplash.com/photo-1556911073-a517e752729c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
      "https://www.quotemaster.org/images/87/87ae417e5dde5ed51d7f0d5bd81d4afd.jpg",
      "https://pbs.twimg.com/media/Cf2i1vSWQAAStAZ.jpg",
      "https://media.images.yourquote.in/post/720/0/0/21/188/x5V16420.webp",
      "https://i.ytimg.com/vi/YztbKUDu52A/maxresdefault.jpg"
    ];

    this.setState({
      data: array
    });
  }
  
  render() {
    return (
      <div style={{margin:"80px",marginTop:"5px",marginBottom:"3px",borderRadius:"10px"}}>
        <Carousel interval="2000" className="mx-5" style={{borderRadius:"30px"}}>
          {this.state.data.map((item, i) => {
            
            return (
              <Carousel.Item key={item.id} >
                
                <img  src={item} alt="" height="400px" width="100%"  />
              </Carousel.Item>
            );
          })}
        </Carousel>
      </div>
    );
  }
}

export default Carosel;
