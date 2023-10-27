import React from 'react';
import './Home.css';

const HomePage = () => {
  return (
    <div className="container">
      <div className="jumbotron">
        <h1>Welcome to DIY Oaks</h1>
        <p>Explore and discover new and easy DIY Ideas.</p>
      </div>
      <img
        src="https://cdn.pixabay.com/photo/2020/04/25/13/26/diy-5090797_640.jpg"
        alt="Food"
        className="homepage-image"
      />
      <div className="description">
        <p>Welcome to DIY Oaks: Your Creative Playground

At DIY Oaks, we're more than just a website; we're your creative playground, your source of inspiration, and your community of makers. Our mission is to celebrate the art of doing it yourself, and we're here to empower your creative journey.

Discover: Dive into a world of endless possibilities. Uncover innovative DIY ideas, from home improvement projects to artistic crafts. Whether you're a seasoned DIY pro or just starting, there's something here for you.

Create: Turn your imagination into reality. Follow step-by-step guides, watch inspiring tutorials, and explore DIY projects that suit your style. We're here to help you bring your ideas to life.

Share: Connect with a community of like-minded DIYers. Share your own creations, offer tips and tricks, and learn from fellow DIY enthusiasts. DIY Oaks is your platform to collaborate and grow together.

Transform: With every project, you're not just creating something beautiful; you're transforming your skills and abilities. Embrace the rewarding journey of making, and see where your creativity can take you.

Join us at DIY Oaks and be part of a thriving community dedicated to the art of DIY. Whether you're into woodworking, crafting, cooking, or any form of hands-on creation, we're here to support and celebrate your DIY adventures.

Come, explore, and create with us. DIY Oaks: Where creativity knows no bounds.</p>
      </div>
      <footer className="footer">
        <p>&copy; 2023 DIY Oaks. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
