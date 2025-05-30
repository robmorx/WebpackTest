export default function createHome() {
  const content = document.createElement('div');
  content.className = 'home-content';

  const heading = document.createElement('h1');
  heading.textContent = 'Welcome to Gourmet Haven';
  
  const image = document.createElement('div');
  image.className = 'restaurant-image';
  
  const description = document.createElement('p');
  description.textContent = 'Experience culinary excellence with our award-winning chefs...';

  content.append(heading, image, description);
  return content;
}