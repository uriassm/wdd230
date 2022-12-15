let orderAmount = window.localStorage.getItem('totalOrders-ls');
let displayOrders = document.querySelector('#drinksOrdered');

if (orderAmount == null) {
    displayOrders.innerHTML = `You have ordered 0 fruit drinks!`;
}else {
    displayOrders.innerHTML = `You have ordered ${orderAmount} fruit drinks!`;
}
