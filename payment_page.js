var cartLS = JSON.parse(localStorage.getItem("cart-page")) || [];

    cartLS.forEach(function(elem){
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

    var payment = document.createElement("button");
    payment.innerText = "Make Payment";
    payment.addEventListener("click",function(){
        payNow()
    })

    offerBox.append(productActualPrice,off);

    innerBox.append(productName,productPrice,offerBox,productSold,payment);

    box.append(productImg,innerBox);

    document.querySelector("#pay").append(box)

})
function payNow(){
    alert("Payment Successful");
    window.location.href = "index.html"
}