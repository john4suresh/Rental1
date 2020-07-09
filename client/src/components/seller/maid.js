import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Passsellerproduct } from "../reducers/actions";

class Maid extends React.Component {
  state = {
    name: "",
    price: "",
    delivery: "",
    image: "",
    description: "",
  };

  handlechange = (e) => {
    const { value, name } = e.target;
    this.setState({
      [name]: value,
    });
  };

  imageUpload = async (e) => {
    e.preventDefault();
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "capstone");
    data.append("cloud_name", "dgvz93fif");
    await fetch("https://api.cloudinary.com/v1_1/dgvz93fif/image/upload", {
      method: "POST",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        this.state.image = data.url;
        console.log(data);
      })
      .catch((err) => console.log(err));
  };

  handlesubmit = (e) => {
    e.preventDefault();
  //  console.log(this.state);
    if (this.state.image === "") {
      alert("Wait till Image is Uploading");
    } else {
      fetch("/maid", {
        method: "POST",
        body: JSON.stringify(this.state),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => console.log(data))
        .catch((err) => console.log(err));
        this.props.Passproduct(this.state);
        this.props.history.push('/appliances');
    }
  };

  render() {
    return (
      <form
        className="demoForm"
        onSubmit={this.handlesubmit}
        style={{ margin: "auto", width: "500px" }}
      >
        <h2>Post Your Product Details</h2>
        <div className="panel panel-default mt-4"></div>

        <div className="panel panel-default">
          <label htmlFor="name">Enter Name of Maid</label>
          <input
            type="name"
            required
            className="form-control"
            name="name"
            placeholder="ProductName"
            value={this.state.name}
            onChange={this.handlechange}
          />
        </div>

        <div className="panel panel-default">
          <label htmlFor="name">Enter price for a day</label>
          <input
            type="text"
            required
            className="form-control"
            name="price"
            placeholder="price"
            value={this.state.price}
            onChange={this.handlechange}
          />

          <div className="panel panel-default">
            <label htmlFor="name">Enter time of availability in a day</label>
            <input
              type="text"
              required
              className="form-control"
              name="delivery"
              placeholder="delivery time"
              value={this.state.delivery}
              onChange={this.handlechange}
            />
          </div>
          <div className="panel panel-default">
            <label htmlFor="image">upload your Image</label>
            <input
              type="file"
              accept="image/*"
              className="form-control"
              name="image"
              placeholder="image"
              onChange={this.imageUpload}
            />
          </div>
        </div>
        <button type="submit" className="btn btn-primary mt-2">
          Submit
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => {
  
  return {
    Passproduct:data => {
      dispatch(Passsellerproduct(data));
      console.log(data);
    }
  }
}

export default connect(null,mapDispatchToProps)(withRouter(Maid));