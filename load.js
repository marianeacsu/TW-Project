function Event(){
   
    var old_names = JSON.parse(localStorage.getItem('names'));
    var old_prices = JSON.parse(localStorage.getItem('prices'));
    var old_tns = JSON.parse(localStorage.getItem('tns'));
    //var html_to_insert = '<section class="container content-section"><h2 class="section-header">CART</h2><div class="cart-row"><span class="cart-item cart-header cart-column">PRODUCT</span><span class="cart-price cart-header cart-column">PRICE</span><span class="cart-quantity cart-header cart-column">QUANTITY</span></div><div class="cart-items">'
    for(var i=0; i<old_names.length; ++i){
    
       var html_to_insert = '<div class="cart-row">\
                             <div class="cart-item cart-column">\
                                 <img class="cart-item-image" src='+old_tns[i]+' width="100" height="100">\
                                 <span class="cart-item-title">'+old_names[i]+'</span>\
                             </div>\
                             <span class="cart-price cart-column">'+old_prices[i]+'</span>\
                             </div>';


       document.getElementById('inr').innerHTML += html_to_insert;
    }
}


window.onload=function(){
    Event();
    
}

function f1(){
    localStorage.removeItem('names');
    localStorage.removeItem('prices');
    localStorage.removeItem('tns');
    window.location.reload();
    alert("Thank you for your reservation!");
}

function f2(){
    localStorage.removeItem('names');
    localStorage.removeItem('prices');
    localStorage.removeItem('tns');
    window.location.reload();
    alert("Your cart is empty!");
}



/*
function total(){
    
    var s=0;
    for(var i=0; i<old_names.length; ++i){
        s=s+old_prices[i];
    }
    alert(s);
}*/

function total(){
    var old_names = JSON.parse(localStorage.getItem('names'));
    var old_prices = JSON.parse(localStorage.getItem('prices'));
    var old_tns = JSON.parse(localStorage.getItem('tns'));
    var products = document.getElementsByClassName('cart-items')[0];
    var cart = products.getElementsByClassName('cart-row');
    var t = 0;
    var s = parseInt(t, 10);
    for(var i=0; i<old_names.length; ++i) {
        var prod = old_names[i];
        var price = parseInt(old_prices[i][0], 10);
        //alert(price);
        //continue;
        //var quan = prod.getElementsByClassName('cart-quantity-input')[0];
        //var q = quan.value;
        s = s +price;
    }
    //t = Math.round(t*100) / 100;
    s = s-s*0.25;
    s = Math.ceil(s);
    document.getElementsByClassName('cart-total-price')[0].innerText = s + '$';
    document.getElementById("myDIV").classList.add("mystyle");
    //document.getElementsByClassName('cart-total-price')[0].innerText = s + '$';
}