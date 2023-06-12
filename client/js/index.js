const shopContent = document.getElementById('shopContent');
const cart = [];

products.forEach((product) => {
    const content = document.createElement('div');
    content.className = "cards";
    content.innerHTML = `
    <img src="${product.img}">
    <h3>${product.productName}</h3>
    <p>Precio: $${product.price}</p>
    `
    shopContent.append(content);

    const buyButton = document.createElement("button");
    buyButton.innerHTML = "Buy";

    content.append(buyButton);

    buyButton.addEventListener("click", () => {
        const repeat = cart.some((repeatProduct) => repeatProduct.id === product.id);

        if (repeat) {
            cart.map((prod) => {
                if (prod.id === product.id) {
                    prod.quanty++;
                }
            });
        } else {
            cart.push({
                id: product.id,
                productName: product.productName,
                price: product.price,
                quanty: product.quanty,
                img: product.img
            });
        }
    });
});