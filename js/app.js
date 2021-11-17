//Both cart are declared. The fisrt one is useful to render objects without duplicating them and the second one is useful to reduce the array to get the totals
let cart = JSON.parse(localStorage.getItem("cart")) || [];
let literalCart = JSON.parse(localStorage.getItem("literalCart")) || [];
//The events are attached to the buy buttons and to the inputs of quantity, and in third place the text of the cart icon is being modified.
$(".buy__Button").on("click", CartAdding); //funtion.js line: 4
$(".buy__Button--quantity").on("click", quantityValue); //funtion.js line: 33
let quantity;
$(".cartCountingItems").text(literalCart.length);