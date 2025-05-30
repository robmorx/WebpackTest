import './style.css';
import createHome from './home';
import createMenu from './menu';
import createContact from './contact';

function init() {
  // Set initial page
  const contentDiv = document.getElementById('content');
  contentDiv.appendChild(createHome());

  // Tab switching logic
  document.getElementById('home').addEventListener('click', () => {
    contentDiv.replaceChildren(createHome());
  });

  document.getElementById('menu').addEventListener('click', () => {
    contentDiv.replaceChildren(createMenu());
  });

  document.getElementById('contact').addEventListener('click', () => {
    contentDiv.replaceChildren(createContact());
  });
}

init();