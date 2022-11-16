let basket = JSON.parse(localStorage.getItem("data")) || [];
let label = document.getElementById("label")
let shoppingCart = document.getElementById("shopping-cart")

let calculation = () => {
    let cartIcon = document.getElementById("cartAmount");
    cartIcon.innerHTML = basket.map((x) => x.item).reduce((x,y) => x+y,0)
};

calculation();

// El problema está a continuación, todo lo que pertenece a "search" da como resultado Undefined o NaN

let generateCartItems = () => {
    if (basket.length !== 0) {
        return (shoppingCart.innerHTML = basket.map((x) => {
            let { id, item } = x;
            let search = shopItemsData.find((y) => y.id === id) || [];
            return `
                <div class="cart-item">
                    <img width="100" src=${search.img} alt="" />
                    <div class="details">
                        <div class="title-price-x">
                            <h4 class="title-price">
                                <p>${search.title}</p>
                                <p class="cart-item-price">$ ${search.price}</p>
                            </h4>
                            <i onclick="removeItem(${id})" class="bi bi-x-lg"></i>
                        </div>
                        <div class="buttons">
                            <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
                            <div id=${id} class="quantity">${item}</div>
                            <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
                        </div>
                        <h3>$ ${item * search.price}</h3>
                    </div>
                </div>
                `;
            })
        .join(""));
    } else {
        shoppingCart.innerHTML = `

        `
        label.innerHTML = `
            <h2>Cart is empty</h2>
            <a href="./index.html">
                <button class="homeBtn">Back to Home</button>
            </a>
        `
    }
}

generateCartItems();