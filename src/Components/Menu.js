// Menu.js

import React from 'react';
import './Menu.css';

const Menu = () => {
  // Assuming you have an array of recipes
  const recipes = [
    {
      id: 1,
      name: 'Wallpaper a Wall',
      description: 'Wallpaper can add color and pattern in an elegant or invigorating way that paint can’t always match. Available in a variety of materials, it can also add texture to your room. Today’s prepasted papers make your DIY décor easier to apply. Just be sure to measure the height and width of each wall and multiply those numbers to calculate the square footage of the wall.You can subtract 10 square feet for every door or large window. If your chosen wallpaper has a pattern, professionals recommend buying an extra roll or two in the same dye lot, depending on the size of the pattern.',
      image: 'https://i.etsystatic.com/31418760/r/il/78c85e/3529729880/il_1080xN.3529729880_h1d6.jpg',
    },
    {
      id: 2,
      name: 'Make Compost',
      description: 'Composting diverts materials from the waste stream, decreasing trash at landfills while also improving soil: a win-win. It’s a simple habit to pick up. Just be sure to learn what can be composted—such as fruits, vegetables, coffee grounds, dryer lint, shredded newspaper, grass clippings, and small leaves and twigs—and what can’t. For example, don’t add meat or dairy products to your compost.Ideally, you’ll want three parts brown material (leaves, twigs, and the like) to one part green material (kitchen scraps and grass clippings). Place your compost in a warm sunny spot, keep it moist, and turn it frequently to aid the breakdown process.',
      image: 'https://empire-s3-production.bobvila.com/articles/wp-content/uploads/2021/11/iStock-843259360-650x433.jpg',
    },
    {
      id: 3,
      name: 'Tile a Backsplash',
      description: 'Backsplashes have a practical side—they protect your walls from food stains, after all—but they also have a decorative purpose. There’s a wealth of colors, sizes, and shapes of tiles from which to choose for a backsplash. Once you’ve selected your tiles, measure the space and mark your starting point. Apply tile mastic to adhere the bottom row to the wall. Insert spacers and keep going. You may need to score and cut tile around electrical outlets.The next day, grout the tile using a rubber float. After the grout has set for an hour, wipe away any excess.',
      image: 'https://empire-s3-production.bobvila.com/articles/wp-content/uploads/2021/11/iStock-179500478-1-650x434.jpg',
    },
    {
      id: 4,
      name: 'DInstall Vinyl Flooring',
      description: 'Vinyl flooring comes in many iterations: by the roll, in “tiles,” and in plank form. Any version makes a great surface, particularly in rooms where high moisture levels occur, such as kitchens and bathrooms. Vinyl plank flooring is easy to cut, doesn’t require bonding to the subfloor, and snaps together simply for a tight fit. Gather the proper tools, remove baseboards and molding, measure accurately, make sure the floor is level, and begin laying out your floor. For floor ducts and door frames, use a utility knife to cut to fit. Tiles are laid in similar fashion. Rolls of flooring have to be carefully unrolled a few feet at a time, removing the backing as you go in order for it to adhere to the floor',
      image: 'https://empire-s3-production.bobvila.com/articles/wp-content/uploads/2021/11/iStock-1090382126-650x433.jpg',
    },
    {
      id: 5,
      name: 'Build a Raised Garden Bed',
      description: 'If you’re looking for things to build with the kids, a raised garden bed may interest you. They make growing vegetables and flowers easier on your back and knees because you don’t have to bend all the way down to the ground. Choose a spot and plot out the size and footprint of your raised bed; 3 feet wide typically enables gardeners to easily reach across. Most are between 12 and 20 inches tall.You can buy a raised bed kit or use water-resistant material, such as concrete blocks, landscape timber, or rot-resistant exterior wood like cedar to build one yourself. You may need screws to attach the corners. Add good soil for raised beds: a combination of two parts topsoil to one part compost or a commercial mix designed for raised beds work best. After planting, you may want to mulch the beds to retain moisture; beds that are above ground lose moisture faster than in-ground gardens.',
      image: 'https://empire-s3-production.bobvila.com/articles/wp-content/uploads/2021/11/iStock-1212380458-1-650x433.jpg',
    },
    {
      id: 6,
      name: 'Paint the Front Door',
      description: 'Add a cheerful welcome to your “projects house” with a painted front door. Ideally, you should remove the door from its hinges before painting. Sand, wash, and dry the surface as part of the prep. Remove hardware—doorknob and hinges—and cover any glass panes.Apply primer or a paint-and-primer-in-one. It will probably take two coats, so let it dry between applications. Once the final coat is dry, replace the hardware and rehang the door.',
      image: 'https://empire-s3-production.bobvila.com/articles/wp-content/uploads/2021/11/iStock-820054010-1-650x434.jpg',
    },
    {
      id: 7,
      name: 'Hang Plants From the Ceiling',
      description: 'A fun décor DIY project that can improve your health by adding oxygen to a room involves hanging plants from the ceiling. Choose a location that gets the required amount of light for your plant. Locate a stud or beam to attach a swag bolt to, or use a toggle bolt to secure to drywall.vBe sure the bolt capacity is rated for the hanging wet weight of your plant plus its container. Be aware that plastic anchors support less weight from the ceiling than the wall; they are not a good choice for a hanging plant. Once the swag bolt is secure, hang your plant.',
      image: 'https://empire-s3-production.bobvila.com/articles/wp-content/uploads/2021/11/iStock-1304798053-650x433.jpg',
    },
    {
      id: 8,
      name: 'Reupholster Secondhand Furniture',
      description: 'Old furniture often has great “bones” or nice detail, but the upholstery might be worn or simply dated. Reupholstering furniture can give it a second life. It’s pretty easy to recover a basic chair seat. Measure the cushion to determine the amount of fabric needed; be sure to allow a few inches all around to fold over the bottom of the seat. Remove the seat from the chair. If you need to make any repairs or want to add new padding or refinish the chair, now’s the time to do it. Cut the fabric to fit. Fold it over the seat and use a staple gun to attach it to the seat’s underside. Stretch it taut and do all sides. Angle the fabric around the corners before stapling. Then reattach to the chair and you have a fresh look',
      image: 'https://empire-s3-production.bobvila.com/articles/wp-content/uploads/2021/11/iStock-825336606-1-650x433.jpg',
    },
    {
      id: 9,
      name: 'Paint the Front Door',
      description: 'Whether your current faucet has sprung a leak or you’d simply like to update the look to match your décor, you may be able to replace it yourself. If your new faucet has the same hole configuration, this will be a snap. However, even if you want to switch from a three-hole faucet to a one-hole faucet, you can do it by adding an escutcheon plate that covers two of the holes. Begin by shutting off the water, usually done by turning a knob under the sink. Loosen the nuts on the faucet and lift it out. Then place the new faucet and escutcheon plate if necessary, attach the nuts, and connect the appropriate water lines. If you’re using an escutcheon plate, you may need to caulk it.',
      image: 'https://empire-s3-production.bobvila.com/articles/wp-content/uploads/2021/11/iStock-936745712-650x433.jpg',
    },
    // Add more recipes as needed
  ];

  return (
    <div className="menu-container">
      <h1>Ideas</h1>
      <div className="recipe-grid">
        {recipes.map((recipe) => (
          <div className="recipe-card" key={recipe.id}>
            <img src={recipe.image} alt={recipe.name} className="recipe-image" />
            <div className="recipe-details">
              <h2>{recipe.name}</h2>
              <p>{recipe.description}</p>
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
