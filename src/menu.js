export default function createMenu() {
  const content = document.createElement('div');
  content.className = 'menu-content';

  const heading = document.createElement('h1');
  heading.textContent = 'Our Menu';
  
  const menuItems = [
    { name: 'Truffle Pasta', price: '$24' },
    { name: 'Seafood Platter', price: '$32' },
    { name: 'Chocolate Soufflé', price: '$14' }
  ];

  menuItems.forEach(item => {
    const div = document.createElement('div');
    div.className = 'menu-item';
    div.innerHTML = `<h3>${item.name}</h3><p>${item.price}</p>`;
    content.appendChild(div);
  });

  return content;
}