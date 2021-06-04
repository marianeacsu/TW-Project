if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function europeOption(imgPath, imgText) {
    var curImage = document.getElementById('europe');
    
    curImage.src = imgPath;
    curImage.alt = imgText;
    curImage.title = imgText;
 }

 function africaOption(imgPath, imgText) {
    var curImage = document.getElementById('africa');
    
    curImage.src = imgPath;
    curImage.alt = imgText;
    curImage.title = imgText;
 }

 function asiaOption(imgPath, imgText) {
    var curImage = document.getElementById('asia');
    
    curImage.src = imgPath;
    curImage.alt = imgText;
    curImage.title = imgText;
 }

 function southamericaOption(imgPath, imgText) {
    var curImage = document.getElementById('southamerica');
    
    curImage.src = imgPath;
    curImage.alt = imgText;
    curImage.title = imgText;
 }

 function northamericaOption(imgPath, imgText) {
    var curImage = document.getElementById('northamerica');
    
    curImage.src = imgPath;
    curImage.alt = imgText;
    curImage.title = imgText;
 }

 function australiaOption(imgPath, imgText) {
    var curImage = document.getElementById('australia');
    
    curImage.src = imgPath;
    curImage.alt = imgText;
    curImage.title = imgText;
 }

 function ready(){
    var rmv = document.getElementsByClassName('cart-btn');
    for (var i = 0; i< rmv.length; i++){
        var button = rmv[i];
        button.addEventListener('click', removeProd);
    }

    var quan = document.getElementsByClassName('cart-quantity-input')
    for (var i = 0; i < quan.length; i++) {
        var input = quan[i]
        input.addEventListener('change', qChange)
    }

    var addBtn = document.getElementsByClassName('add')[0];
    addBtn.addEventListener('click', addProduct);
    // document.getElementsByClassName('purchase')[0].addEventListener('click', function(event){
    //     alert('Thank you for your purchase');
        // var products = getElementsByClassName('cart-items')[0];
        // while (products.hasChildNodes()){
        //     products.removeChild(products.firstChild);
        // }
        //total();
    // });
}

function removeProd(event){
    var btn = event.target;
    btn.parentElement.parentElement.remove()
    total();
}

function addProduct(event){
    var btn = event.target;
    var prod = btn.parentElement.parentElement;
    var name = prod.getElementsByClassName('name')[0].innerText;
    var price = prod.getElementsByClassName('price')[0].innerText;
    var prod2 = prod.parentElement;
    var tn = prod2.getElementsByClassName('thumbnail')[0].src;
    var thumbnails = ["file:///C:/Users/Maria/Desktop/TW%20project/elafonisi.jpg",
                      "file:///C:/Users/Maria/Desktop/TW%20project/comino.jpg",
                      "file:///C:/Users/Maria/Desktop/TW%20project/cadiz.jpg",
                      "file:///C:/Users/Maria/Desktop/TW%20project/pinkbeach.jpg",
                      "file:///C:/Users/Maria/Desktop/TW%20project/whitebeach.jpg",
                      "file:///C:/Users/Maria/Desktop/TW%20project/pompom.jpg",
                      "file:///C:/Users/Maria/Desktop/TW%20project/jambiani.jpg",
                      "file:///C:/Users/Maria/Desktop/TW%20project/pongwe.jpg",
                      "file:///C:/Users/Maria/Desktop/TW%20project/diani.jpg",
                      "file:///C:/Users/Maria/Desktop/TW%20project/cable.jpg",
                      "file:///C:/Users/Maria/Desktop/TW%20project/fourmile.jpg",
                      "file:///C:/Users/Maria/Desktop/TW%20project/whitehaven.jpg",
                      "file:///C:/Users/Maria/Desktop/TW%20project/sanandres.jpg",
                      "file:///C:/Users/Maria/Desktop/TW%20project/brazil.jpg",
                      "file:///C:/Users/Maria/Desktop/TW%20project/chile.jpg",
                      "file:///C:/Users/Maria/Desktop/TW%20project/tulum.jpg",
                      "file:///C:/Users/Maria/Desktop/TW%20project/gracebay.jpg",
                      "file:///C:/Users/Maria/Desktop/TW%20project/keywest.jpg",
                    ];
    if (thumbnails.includes(tn)) {
        alert('Choose an option');
    }
    else {
         addProd(name, price, tn);
         //total();
        console.log(name, price, tn);
    }

}

function addProd(name, price, tn){
   /* localStorage.removeItem('names');
    localStorage.removeItem('prices');
    localStorage.removeItem('tns');
    return;*/
    if(localStorage.getItem('names')==null){
        localStorage.setItem('names','[]');
    }
    if(localStorage.getItem('prices')==null){
        localStorage.setItem('prices','[]');
    }
    if(localStorage.getItem('tns')==null){
        localStorage.setItem('tns','[]');
    }
    var old_names = JSON.parse(localStorage.getItem('names'));
    var old_prices = JSON.parse(localStorage.getItem('prices'));
    var old_tns = JSON.parse(localStorage.getItem('tns'));
  /*  for(var i=0; i<old_names.length; ++i){
       if(old_names[i]==name)
         {alert("This product is already added to the cart.");
          return;
         }
    }*/
    old_names.push(name);
    old_prices.push(price);
    old_tns.push(tn);
    localStorage.setItem('names',JSON.stringify(old_names));
    localStorage.setItem('prices',JSON.stringify(old_prices));
    localStorage.setItem('tns',JSON.stringify(old_tns));

    /*
    var p = document.createElement('div');
    p.classList.add('cart-row');
    var products = document.getElementsByClassName('cart-items')[0];
    var prodNames = document.getElementsByClassName('cart-item-title');
    for (var i =0; i< prodNames.length; i++){
        if (prodNames.innerText == name){
            alert("This product is already added to the cart.");
            return;
        }
    }
    var content =`
    <div class="cart-item cart-column">
        <img class="cart-item-image" src="${tn}" width="100" height="100">
        <span class="cart-item-title">${name}</span>
    </div>
    <span class="cart-price cart-column">${price}</span>
    <div class="cart-quantity cart-column">
        <input class="cart-quantity-input" type="number" value="1">
        <button class="cart-btn" type="button">REMOVE</button>
    </div>`
    p.innerHTML = content;
    products.append(p);
    p.getElementsByClassName('cart-btn')[0].addEventListener('click', removeProd);
    */
}






function qChange(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    total();
}
/*
function total(){
    
    var s=0;
    for(var i=0; i<old_names.length; ++i){
        s=s+old_prices[i];
    }
    alert(s);
    var products = document.getElementsByClassName('cart-items')[0];
    var cart = products.getElementsByClassName('cart-row');
    var t = 0;
    for (var i = 0; i < cart.length; i++) {
        var prod = cart[i];
        var price = prod.getElementsByClassName('cart-price')[0];
        var quan = prod.getElementsByClassName('cart-quantity-input')[0];
        var p = parseFloat(price.innerText.replace('$', ''));
        var q = quan.value;
        t = t + (p * q);
    }
    t = Math.round(t*100) / 100;
    document.getElementsByClassName('cart-total-price')[0].innerText = t + '$';
}
*/
document.getElementById("p9").style.color = "white";
document.getElementById("p9").style.fontSize = "larger";
document.getElementById("p9").style.fontFamily = "Brush Script MT";




function letsStart() {
    setTimeout(function(){ alert("Hello! I am here to help you find the best beaches in the world!"); }, 1000);
    setInterval(function(){ alert("Let's start!"); }, 5000);
}

