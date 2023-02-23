const container = document.querySelector('.carousel-container');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
let position = 0;

nextBtn.addEventListener('click', () => {
  position -= 900; /* 3 times the width of a single product card */
  if (position < -(container.offsetWidth - 900)) {
    position = 0;
  }
  container.style.transform = `translateX(${position}px)`;
});

prevBtn.addEventListener('click', () => {
  position += 900; /* 3 times the width of a single product card */
  if (position > 0) {
    position = -(container.offsetWidth - 900);
  }
  container.style.transform = `translateX(${position}px)`;
});

const carousel = document.querySelector('.carousel');
const carouselItems = carousel.querySelectorAll('.carousel-item');

carouselItems1.forEach(item => {
  const productName = item.getAttribute('Product 1');
  const productImage = item.getAttribute('Description of Product 1');
  const productPrice = item.getAttribute('$19.99');

  const productNameElement = item.querySelector('h3');
  const productImageElement = item.querySelector('img');
  const productPriceElement = item.querySelector('p');

  productNameElement.textContent = productName;
  productImageElement.src = productImage;
  productImageElement.alt = productName;
  productPriceElement.textContent = productPrice;
});

carouselItems2.forEach(item => {
  const productName = item.getAttribute('Product 2');
  const productImage = item.getAttribute('Description of Product 2');
  const productPrice = item.getAttribute('$29.99');

  const productNameElement = item.querySelector('h3');
  const productImageElement = item.querySelector('img');
  const productPriceElement = item.querySelector('p');

  productNameElement.textContent = productName2;
  productImageElement.src = productImage2;
  productImageElement.alt = productName2;
  productPriceElement.textContent = productPrice2;
});

carouselItems3.forEach(item => {
  const productName = item.getAttribute('Product 3');
  const productImage = item.getAttribute('Description of Product 3');
  const productPrice = item.getAttribute('$39.99');

  const productNameElement = item.querySelector('h3');
  const productImageElement = item.querySelector('img');
  const productPriceElement = item.querySelector('p');

  productNameElement.textContent = productName3;
  productImageElement.src = productImage3;
  productImageElement.alt = productName3;
  productPriceElement.textContent = productPrice3;
});


class Product:
    def __init__(self, name, price, description):
        self.name = name
        self.price = price
        self.description = description

/* Create some product instances */
product1 = Product("Product 1", 10.0, "Description 1")
product2 = Product("Product 2", 20.0, "Description 2")
product3 = Product("Product 3", 30.0, "Description 3")

/* Create a list of product instances */
product_list = [product1, product2, product3]

{ /* Product 1 */
  print(product1.name) 
  print(product1.price) 
  print(product1.description) 
}

{ /* Product 2 */
  print(product2.name) 
  print(product2.price) 
  print(product2.description) 
}

{ /* Product 3 */
  print(product3.name) 
  print(product3.price) 
  print(product3.description) 
}





