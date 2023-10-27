import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

const About = () => {
  return (
    <div className="container mt-4">
      <h1 className="text-primary">About</h1>

      <div className="row">
        <div className="col-md-6">
          <h3 className="text-info">Our Service</h3>
          <p>
          Our mission at DIY Oaks is to empower individuals and businesses with the tools and knowledge to create and manage their online presence effortlessly. We are dedicated to providing user-friendly website-building solutions that enable our users to express their unique ideas and showcase their products or services effectively. With a strong commitment to accessibility and affordability.
          </p>
        </div>

        <div className="col-md-6">
          <h3 className="text-info">Our Vision</h3>
          <p>
          Our vision is to democratize web development and make it accessible to everyone, regardless of their technical background. We envision a future where anyone, regardless of their skill level, can craft a professional and engaging website to fulfill their personal or business goals. Our platform seeks to simplify the web development process, offering a range of templates, features, and educational resources, to ensure that the digital landscape becomes a place where creativity knows no bounds.
          </p>
        </div>
      </div>

      <button className="btn btn-primary mt-4" type="button" data-toggle="collapse" data-target="#collapseDetails" aria-expanded="false" aria-controls="collapseDetails">
        More Details
      </button>

      <div className="collapse mt-3" id="collapseDetails">
        <div className="card card-body bg-light">
          <h3 className="text-info">Additional Details</h3>
          
        </div>
      </div>
    </div>
  );
};

export default About;