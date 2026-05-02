let data=[];

async function fetchData() {
    try {
        const response = await fetch('/Product.json');
        data = await response.json();
        displayProduct(data);

    }
    catch (error) {
        console.error('Error fetching data:', error);
    }
}
function displayProduct(product) {
    const ProductContainer= document.getElementById('products');
    ProductContainer.innerHTML = '';
    product.forEach(item => {
        const productElement = document.createElement('div');
        productElement.innerHTML = `
            <h2>${item.name}</h2>
            <p>Price: $${item.price}</p>
            <p>${item.category}</p>
            <p>${item.inStock ? 'In stock' : 'Out of stock'}</p>
        `;
        ProductContainer.appendChild(productElement);
    });
}

function filterProducts() {
const element = document.getElementById('searchBar');
const filter = data.filter(
    product=> product.name.toLowerCase().includes(element.value.toLowerCase())|| product.category.toLowerCase().includes(element.value.toLowerCase())
);
displayProduct(filter);
}

fetchData();
