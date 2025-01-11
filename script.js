const products = [
    { name: 'Robot Vacuum', price: 220, src: "robot-vacuum.jpg", alt: "Vacuum"},
    { name: 'Projector'   , price: 60, src: "projector.jpg", alt: "Projector"},
    { name: 'Headphones', price: 40, src: "headphones.jpg", alt: "Headphones"},
    { name: 'Tablet', price: 150, src: "tablet.jpg", alt: "Tablet"},
    { name: 'Smart Watch', price: 70, src: "smart-watch.jpg", alt: "Watch"},
    { name: 'Snow Boots', price: 45, src: "snow-boots.jpg", alt: "Boots"},
    { name: 'Sunglasses', price: 30, src: "sunglasses.jpg", alt: "Sunglasses"},
    { name: 'Candle', price: 5, src: "candle.jpg", alt: "Candle"}
];

function displayProducts(products) {
    const productList = document.getElementById('product-list');
    productList.innerHTML = ''; // Clear previous results

    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');

        productDiv.innerHTML = `
        <h2>${product.name}</h2>
        <img src ="${product.src}" alt "${product.alt}">
        <p class = "price">£${product.price.toFixed(2)}</p>
        `;

        productList.appendChild(productDiv);
    });
}

function searchProduct() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const foundProducts = [];

    for (let i = 0; i < products.length; i++) {
        if (products[i].name.toLowerCase().includes(searchInput)){
            foundProducts.push(products[i]);
        }
    }

    displayProducts(foundProducts);
}

// Display all products initially
displayProducts(products);