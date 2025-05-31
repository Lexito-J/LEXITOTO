 document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.slider-btn.prev');
    const nextBtn = document.querySelector('.slider-btn.next');
    let current = 0;

    function showSlide(index) {
      slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
      });
    }

    prevBtn.addEventListener('click', () => {
      current = (current === 0) ? slides.length - 1 : current - 1;
      showSlide(current);
    });

    nextBtn.addEventListener('click', () => {
      current = (current === slides.length - 1) ? 0 : current + 1;
      showSlide(current);
    });

    // Auto slide cada 4 segundos
    setInterval(() => {
      current = (current === slides.length - 1) ? 0 : current + 1;
      showSlide(current);
    }, 4000);

    showSlide(current);
  });

//catalogo de productos

// Lista de productos
const product = [
    
  {
    id: 1,
    name: "Caddy",
    price: 20,
    image: "img/pc.jpg"
  },
  {
    id: 2,
    name: "Zapatos Negros",
    price: 45,
    image: "img/producto2.jpg"
  },
  {
    id: 3,
    name: "Mochila Azul",
    price: 30,
    image: "img/producto3.jpg"
  }
];

const productList = document.getElementById('product-list');
const cart = document.getElementById('cart');
const cartItems = [];

// Mostrar productos
products.forEach(product => {
  const div = document.createElement('div');
  div.className = 'product';
  div.innerHTML = `
    <img src="${product.image}" alt="${product.name}">
    <h3>${product.name}</h3>
    <p>Precio: $${product.price}</p>
    <button onclick="addToCart(${product.id})">Agregar al carrito</button>
  `;
  productList.appendChild(div);
});

// Agregar al carrito
function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  cartItems.push(product);
  updateCart();
}

// Actualizar el carrito
function updateCart() {
  cart.innerHTML = '';
  cartItems.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.name} - $${item.price}`;
    cart.appendChild(li);
  });
}

/*agregar carrito*/

const products = [
  { id: 1, name: "Camiseta Roja", price: 20, image: "img/producto1.jpg" },
  { id: 2, name: "Zapatos Negros", price: 45, image: "img/producto2.jpg" },
  { id: 3, name: "Mochila Azul", price: 30, image: "img/producto3.jpg" }
];

const productList = document.getElementById("product-list");

products.forEach(product => {
  const div = document.createElement("div");
  div.className = "product";
  div.innerHTML = `
    <img src="${product.image}" alt="${product.name}">
    <h3>${product.name}</h3>
    <p>Precio: $${product.price}</p>
    <button onclick="addToCart(${product.id})">Agregar al carrito</button>
  `;
  productList.appendChild(div);
});

function addToCart(productId) {
  const product = products.find(p => p.id === productId);

  // Obtener carrito actual del localStorage o crear nuevo
  const currentCart = JSON.parse(localStorage.getItem("cart")) || [];

  // Agregar producto al carrito
  currentCart.push(product);

  // Guardar carrito actualizado en localStorage
  localStorage.setItem("cart", JSON.stringify(currentCart));

  alert(`${product.name} agregado al carrito.`);
}

