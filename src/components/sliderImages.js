import React, { Component } from 'react';
import first from "../images/4.jpg";
import second from "../images/5.jpg";
import third from "../images/6.jpg";

class SliderImages extends Component {
    render() {
        return (
            
      <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
      <ol className="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img className="d-block w-100" src={first} alt="First slide" height="600px"/>
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src={second} alt="Second slide" height="600px"/>
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src={third} alt="Third slide" height="600px"/>
        </div>
      </div>
      <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
      </div>
        );
    }
}

export default SliderImages;