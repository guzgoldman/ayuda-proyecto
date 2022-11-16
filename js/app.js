const productList = document.querySelector('.product-list');
let basket = JSON.parse(localStorage.getItem("data")) || [];

let generateShop = () => {
    return (productList.innerHTML = shopItemsData.map((x) => {
        let {id, title, artist, price, img} = x;
        let search = basket.find((x) => x.id === id) || [];
        return `
            <div class="carta">
                <img src="${img}" alt="${title} Cover" style="width:325px; height:325px; object-fit:cover">
                <h1 class="cardTitle">${title}</h1>
                <p>by ${artist}</p>
                <div class="price-quantity">
                    <p class="price">${price} USD</p>
                    <div class="cardButtons">
                        <i onclick="decrement(${id})" class="fa-solid fa-minus"></i>
                        <div id=${id} class="quantity">
                            ${search.item === undefined ? 0 : search.item}
                        </div>
                        <i onclick="increment(${id})" class="fa-solid fa-plus"></i>
                    </div>
                </div>
            </div>
        `
    }));
};

generateShop();

let increment = (id) => {
    let search = basket.find((x) => x.id === id);

    if(search === undefined) {
        basket.push({
            id: id,
            item:1
        });
    } else {
        search.item += 1;
    }

    update(id);

    localStorage.setItem("data", JSON.stringify(basket));
}

let decrement = (id) => {
    let search = basket.find((x)=> x.id === id)

    if(search === undefined) return;
    else if(search.item === 0) return;
    else {
        search.item -= 1;
    }
    update(id);

    basket = basket.filter((x) => x.item !== 0);

    localStorage.setItem("data", JSON.stringify(basket));
};

let update = (id) => {
    let search = basket.find((x) => x.id === id)
    document.getElementById(id).innerHTML = search.item;
    calculation();
};

let calculation = () => {
    let cartIcon = document.getElementById("cartAmount");
    cartIcon.innerHTML = basket.map((x) => x.item).reduce((x,y) => x+y,0)
};

calculation();