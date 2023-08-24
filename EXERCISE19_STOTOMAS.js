let cart = [];

if(localStorage.getItem("savedCart")){
    cart = JSON.parse(localStorage.getItem("savedCart"));
}

// localStorage.setItem("brando", "Sample Value");

// let name = localStorage.getItem("brando");

function addToCart(name, price, image){
    cart.push({productName: name, productPrice: price, productImage: image});
    // alert(cart);
    localStorage.setItem("savedCart", JSON.stringify(cart));
    alert("Item is successfully addded to cart");
    // showCart();

}

function showCart(){
    // cart.forEach(
        let getSavedCart = JSON.parse(localStorage.getItem("savedCart"));
        let showCartItems = "";
        getSavedCart.forEach(
        function(items){
            showCartItems = showCartItems +
            `<div class="cartcol">
                <img src= '${items.productImage}' style="width:100px">
                <p id="desc">${items.productName}</p>
                <p id="price">Php${items.productPrice}</p>
            </div>
            `;
            // `Product Name: ${items.productName} ||
            // Product Price: ${items.productPrice}`

            // alert(`
            // Product Name: ${items.productName} ||
            // Product Price: ${items.productPrice}
            // `);
        }
    )
    document.getElementById("items").innerHTML = showCartItems;
}

showCart();

function removeCart(){
    document.getElementById("items").innerHTML = "";
    localStorage.removeItem("savedCart");
}