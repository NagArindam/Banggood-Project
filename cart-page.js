var cartLS = JSON.parse(localStorage.getItem("cart-page")) || [];

var totalPrice=0;

cartLS.forEach(function(elem){  
    totalPrice += +elem.offerprice;
    var box = document.createElement("div");

    var productImg = document.createElement("img");
    productImg.setAttribute("src",elem.image);

    var innerBox = document.createElement("div");

    var productName = document.createElement("a");
    productName.innerText = elem.name;
    productName.addEventListener("click",function(){
        openWindow();
    })
    
    var productPrice = document.createElement("h4");
    productPrice.innerText = elem.offerprice;

    var offerBox = document.createElement("p");

    var productActualPrice = document.createElement("span");
    productActualPrice.innerText = elem.price;

    var off = document.createElement("span");
    off.innerText = elem.offer;

    var productSold = document.createElement("p");
    productSold.innerText = elem.sold;

    var deleteCart = document.createElement("button");
    deleteCart.innerText = "DELETE";
    deleteCart.addEventListener("click",function(){
        delteFunc(elem.name);
    })

    offerBox.append(productActualPrice,off);

    innerBox.append(productName,productPrice,offerBox,productSold,deleteCart);

    box.append(productImg,innerBox);

    document.querySelector("#container").append(box)
})
console.log(totalPrice);
function delteFunc(namee){
    var deleted = cartLS.filter(function(ele){
        return ele.name != namee;
    })
    cartLS=deleted;
    localStorage.setItem("cart-page",JSON.stringify(cartLS))
}