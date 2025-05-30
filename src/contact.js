export default function createContact() {
  const content = document.createElement('div');
  content.className = 'contact-content';

  const heading = document.createElement('h1');
  heading.textContent = 'Find Us';
  
  const address = document.createElement('p');
  address.textContent = '123 Gourmet Street, Food City';
  
  const phone = document.createElement('p');
  phone.textContent = 'Phone: (555) 123-4567';

  content.append(heading, address, phone);
  return content;
}