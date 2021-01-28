var order;


var orderdetils;

while (order !== "brush" && order !== "color") {
    order = prompt('wahat do you want brush or color');
}




var itemorder = '';

if (order === 'brush') {
    itemorder = '<img src="brush2.png"/>';
} else if (order === "color") {
    itemorder = '<img src="color2.png"/>';
}

var nooforder = prompt('how many do yount to order?');

var result = '';

for (var i = 0; i < nooforder; i++) {
    result = result + itemorder;
}

document.write(result);
document.getElementById("order").innerText = order;
document.getElementById("nooforder").innerText = nooforder;
confirm("are you happy with your gift?");
alert("Thank you and have a nice drawing");

