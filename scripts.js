async function fetchData() {
    try {
        const response = await fetch('/Product.json');
        const data = await response.json();
        const productDiv= document.getElementById("products");
        data.forEach(product => {
            const productElement = document.createElement('div');
            productElement.innerHTML = `
                <h2>${product.name}</h2>
                <p>${product.category}</p>
                <p>${product.price}</p>
                <p>${product.inStock ? 'In Stock' : 'Out of Stock'}</p> 
            `;
            productDiv.appendChild(productElement);
        });
    }
    catch (error) {
        console.error('Error fetching data:', error);
    }
}
fetchData();
