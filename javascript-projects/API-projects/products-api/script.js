const products = document.getElementById('productsContainer');

// funkcija kad gauti duomenis is kito website:
async function fetchProducts(product) {
  const api = 'https://fakestoreapi.com/products';

  const response = await fetch(api);
  if (!response.ok) {
    // jei response nera ok (false), sukuria reject:
    throw new Error('Could not fetch weather data. Try again?');
  }
  // jei response - true, atsiusk duomenis kaip json folderi (reikes event listener'iui):
  return await response.json();

  showcaseProducts();
}

function showcaseProducts(products) {
  // we take this data from API (it comes as gigantic object) and use these as variables to show in our card:
  const { title: title, image: photo } = products;

  // kiekvienam produktui paleidziam cikla:
  products.forEach((item) => {
    // is kur cia item?
    const product = item; // ko cia truksta?
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
    productCard.innerHTML = `<img src="${product.image}" alt="produkto nuotrauka">
    <h3>${product.title}</h3>`;

    productsContainer.append(productCard);
  });
}

fetchProducts();
