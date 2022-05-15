

window.addEventListener('changeCart', () => {
    let cart = JSON.parse(localStorage.getItem('cart') || '{}')
    const nbProducts = document.querySelector('#nb-products')
    nbProducts.innerHTML = Object.keys(cart).length
});


window.addEventListener("DOMContentLoaded", () => {
    const changeCartEvent = new CustomEvent('changeCart')
    window.dispatchEvent(changeCartEvent)
  });
